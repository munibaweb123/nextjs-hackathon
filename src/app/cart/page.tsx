"use client";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../components/ui/button";

const Cart = () => {
  const {
    cartDetails,
    cartCount,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  // Handle Checkout Click
  const handleCheckoutClick = async () => {
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Checkout error:", result.error);
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] px-4 md:px-8">
      <div className="max-w-[1064px] mx-auto py-6 relative">
        <h3 className="text-2xl md:text-4xl mb-4">Your Shopping Cart</h3>

        {/* Scrollable Table Container */}
        <div className="w-full overflow-auto md:overflow-visible">
          <table className="w-full table-auto bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="border-b-2 border-[#D9D9D9]">
                <th className="px-4 py-2 text-left font-normal">Product</th>
                <th className="px-4 py-2 text-center font-normal">Quantity</th>
                <th className="px-4 py-2 text-right font-normal">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartCount === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-600">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                Object.values(cartDetails ?? {}).map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-4 text-gray-800">
                      <div className="flex items-center">
                        <div className="w-[109px] h-[134px] flex-shrink-0">
                          <Image
                            src={item.image ?? "/placeholder.png"}
                            alt={item.name}
                            height={500}
                            width={500}
                            className="object-cover"
                          />
                        </div>
                        <div className="pl-4">
                          <h3 className="text-lg md:text-xl">{item.name}</h3>
                          <p className="text-sm md:text-base">{item.description}</p>
                          <p className="font-semibold">£{item.price}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => decrementItem(item.id)}
                          className="px-2 py-1 border rounded bg-gray-100"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => incrementItem(item.id)}
                          className="px-2 py-1 border rounded bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right">
                      £{(item.price * item.quantity).toFixed(2)}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 ml-4 underline text-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Subtotal Section */}
        <div className="w-full md:w-auto mt-6 md:mt-4 md:absolute left-0">
          <div className="text-lg text-center md:text-right">
            Subtotal:{" "}
            <span className="font-semibold">
              £{(totalPrice ?? 0)}
            </span>
          </div>
          <p className="text-sm text-center md:text-right mt-1">
            Taxes and shipping are calculated at checkout.
          </p>
        </div>

        {/* Checkout Button */}
        <div className="w-full flex justify-center md:justify-end mt-6">
          <Button
            onClick={handleCheckoutClick}
            className="w-full md:w-[172px] h-[56px] bg-[#2A254B] text-white"
          >
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
