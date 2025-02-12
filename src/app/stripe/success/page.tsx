'use client';
import { useEffect, useState } from 'react';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart'; // Assuming use-shopping-cart is being used
import { useSearchParams } from 'next/navigation';
const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber")
  
  const [orderId, setOrderId] = useState<string | null>(null);
  const { clearCart } = useShoppingCart() // Importing clearCart from use-shopping-cart

  useEffect(() => {
    // Check if we are on the client side and access the URL parameters

    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber,clearCart]);

// Added clearCart as dependency to ensure it's updated when the page reloads

  return (
    <div className="py-10 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
      <h2>
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
      </h2>
      <div className="text-center">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Done!
        </h3>
        <div>
          {orderNumber && (
            <p className='text-gray-600 flex items-center space-x-5'>
              <span>Order Number:</span>
              <span className='font-mono text-sm text-green-600'>{orderNumber}</span>
            </p>
          )}
        </div>
        <p className="text-gray-600 my-2">Thank you for your purchase, hope you enjoy it!</p>
        <p className="text-gray-600 font-bold">Have a great day!</p>
        <Button asChild className="mt-5">
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
