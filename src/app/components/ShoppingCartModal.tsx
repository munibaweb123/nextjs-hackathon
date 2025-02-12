"use client";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { useMemo } from "react";

export default function ShoppingCartModal() {
  const { 
    cartCount, 
    shouldDisplayCart, 
    handleCartClick, 
    cartDetails, 
    removeItem, 
    totalPrice, 
    redirectToCheckout 
  } = useShoppingCart();

  async function handleCheckoutClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Checkout error:", result.error);
      }
    } catch (error) {
      console.error("Unexpected error during checkout:", error);
    }
  }

  // Memoized cart items for performance optimization
  const cartItems = useMemo(() => Object.values(cartDetails ?? {}), [cartDetails]);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg max-w-full w-full">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {/* 🔹 If User is Signed In, Show Cart */}
        <SignedIn >
          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="text-2xl py-6">You don&apos;t have any items</h1>
                ) : (
                  cartItems.map((entry) => (
                    <li key={entry.id} className="py-6 flex rounded-md">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image ? entry.image : "/product1.png"}
                          alt={entry.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <button 
                            type="button" 
                            onClick={() => removeItem(entry.id)} 
                            className="font-md text-primary hover:text-primary/80"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes are calculated at checkout.
              </p>
              <div className="mt-6">
                <Button onClick={handleCheckoutClick} className="w-full">
                  Checkout
                </Button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  OR{" "}
                  <button onClick={handleCartClick} className="font-medium text-primary hover:text-primary/80">
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        </SignedIn>

        {/* 🔹 If User is Signed Out, Show Login Prompt */}
        <SignedOut>
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <p className="text-lg font-semibold text-red-500">
              You must be signed in to access your cart.
            </p>
            <SignInButton mode="modal">
              <Button className="mt-4 w-full text-white">Sign In</Button>
            </SignInButton>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
} 