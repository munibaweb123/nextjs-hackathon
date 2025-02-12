"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/app/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function CheckoutNow() {
  const { cartDetails, totalPrice, clearCart } = useShoppingCart();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (!user) {
      toast.error("You must be logged in to checkout!");
      return;
    }

    if (!cartDetails || Object.keys(cartDetails).length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const email = user.primaryEmailAddress?.emailAddress;
    if (!email) {
      toast.error("No email found for your account.");
      return;
    }

    // Use `slug` from the product schema instead of `productId`
    const items = Object.values(cartDetails).map((item) => ({
      slug: item.slug || `${item.name}-${crypto.randomUUID()}`, // Use `slug` or fallback
      name: item.name,
      description: item.description || "No description",
      price: item.price,
      currency: item.currency || "usd",
      quantity: item.quantity,
      image: item.image ? urlFor(item.image).url() : "/default-product.png", // Fallback image
    }));

    try {
      setLoading(true);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      clearCart(); // ✅ Clears the cart after checkout
      window.location.href = data.url; // Redirects to Stripe checkout
    } catch (error) {
      console.error("Checkout Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to process checkout. Try again!";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      className="w-full hover:text-white shadow-md hover:opacity-100 hover:bg-[#4E4D93]"
      variant="outline"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Processing..." : "Checkout Now"}
    </Button>
  );
}
