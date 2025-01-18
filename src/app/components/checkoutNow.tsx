'use client';
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/app/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { ProductCart } from "./AddToCart";




export default function CheckoutNow({ name, description, price, currency, image, price_id }: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId:string){
    checkoutSingleItem(priceId)
  }

  // Prepare the product object
  const Product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image ? urlFor(image).url() : "/product1.png", // Use fallback image if no image provided
    price_id: price_id,
    sku: `${name}-${Math.random().toString(36).substr(2, 9)}`
  };

  return (
    <Button
      className="w-full hover:text-white shadow-md opacity-0 hover:opacity-100 hover:bg-[#4E4D93]"
      onClick={() => {
       buyNow(Product.price_id) // Open the cart when item is added
      }}
    >
      Add to Cart
    </Button>
  );
}
