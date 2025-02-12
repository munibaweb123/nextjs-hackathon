import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getAuth } from "@clerk/nextjs/server";
import { createClient } from "@sanity/client";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

// Initialize Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false, // Should be false for real-time writes
});

export async function POST(req: NextRequest) {
  try {
    // Get session from Clerk to verify user identity
    const { userId } = await getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { items, email, customerName, stripeCustomerId, currency, amountDiscount, city, phone } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Calculate total price
    const totalAmount = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

    // Generate a unique order number
    const orderNumber = `order_${Date.now()}`;

    // Create Stripe Checkout Session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/stripe/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/stripe/cancel`,
      customer_email: email,
      metadata: { userId },
      line_items: items.map((item: any) => ({
        price_data: {
          currency: currency || "usd",
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: item.price * 100, // Convert dollars to cents
        },
        quantity: item.quantity,
      })),
    });

    if (!stripeSession.id) {
      throw new Error("Failed to create Stripe session");
    }

    // Log to verify data before saving to Sanity
    console.log("🛒 Order Data:", {
      orderNumber,
      stripeCustomerId,
      customerName,
      email,
      items,
      totalAmount,
      city,
      phone,
    });

    // Create Order in Sanity with references
    const order = await sanityClient.create({
      _type: "order",
      orderNumber,
      stripeCheckoutSessionId: stripeSession.id,
      stripeCustomerId: stripeCustomerId || "", // Ensure it's not undefined
      clerkUserId: userId,
      customerName: customerName || "Unknown Customer", // Ensure customerName is always saved
      email: email || "No Email Provided",
      stripePaymentIntentId: stripeSession.payment_intent || "",
      products: items.map((item: any) => ({
        product: { _type: "reference", _ref: item._id }, // Reference to Sanity product
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image || "",
      })),
      totalPrice: totalAmount,
      currency: currency || "usd",
      amountDiscount: amountDiscount || 0,
      status: "pending",
      orderDate: new Date().toISOString(),
      city: city || "Unknown",
      phone: phone || "No Phone Provided",
    });

    console.log("✅ Order Created in Sanity:", order);

    return NextResponse.json({ url: stripeSession.url });
  } catch (error: any) {
    console.error("❌ Checkout Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
