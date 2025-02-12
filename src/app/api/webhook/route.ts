import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient } from "@sanity/client";
import { buffer } from "micro";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-01-27.acacia" });

// Initialize Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export const config = {
  api: {
    bodyParser: false, // Required for Stripe webhook verification
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const sig = req.headers["stripe-signature"];
  let event: Stripe.Event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error: any) {
    console.error("❌ Webhook Error:", error.message);
    return res.status(400).json({ error: `Webhook Error: ${error.message}` });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderNumber = session.metadata?.orderNumber;
    const stripeCheckoutSessionId = session.id;
    const stripeCustomerId = session.customer as string;
    const stripePaymentIntentId = session.payment_intent as string;
    let email = session.customer_email;

    // Fetch customer email if it's missing
    if (!email && session.customer) {
      try {
        const customer = await stripe.customers.retrieve(session.customer as string);
        email = (customer as Stripe.Customer).email ?? null;
      } catch (err) {
        console.error("❌ Failed to fetch customer details:", err);
      }
    }

    if (!email) {
      console.warn("⚠️ No email found, cart cannot be cleared.");
    }

    try {
      // Fetch line items
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      if (orderNumber) {
        // ✅ Update existing order in Sanity
        await sanityClient.patch(orderNumber).set({
          status: "success",
          stripeCheckoutSessionId,
          stripeCustomerId,
          stripePaymentIntentId,
        }).commit();

        console.log(`✅ Order ${orderNumber} marked as success`);
      } else {
        // ✅ Create new order if missing
        console.warn("⚠️ Order Number missing. Creating a new order.");

        const newOrder = await sanityClient.create({
          _type: "order",
          orderNumber: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          stripeCheckoutSessionId,
          stripeCustomerId,
          stripePaymentIntentId,
          clerkUserId: session.metadata?.userId || "",
          customerName: session.metadata?.customerName || "Unknown",
          email: email,
          products: lineItems.data.map((item) => ({
            product: { _type: "reference", _ref: item.description }, // Adjust to your schema
            quantity: item.quantity,
          })),
          totalPrice: session.amount_total! / 100,
          currency: session.currency,
          amountDiscount: session.total_details?.amount_discount
            ? session.total_details.amount_discount / 100
            : 0,
          status: "success",
          orderDate: new Date().toISOString(),
        });

        console.log("✅ New order created in Sanity:", newOrder._id);
      }

      // ✅ Clear cart if email exists
      if (email) {
        const cartId = `cart-${email}`;
        await sanityClient.delete(cartId);
        console.log(`🛒 Cart for ${email} cleared.`);
      }
    } catch (err) {
      console.error("❌ Sanity update error:", err);
      return res.status(500).json({ error: "Failed to update order in Sanity" });
    }
  }

  res.status(200).json({ received: true });
}
