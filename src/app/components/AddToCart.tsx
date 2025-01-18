'use client';
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/app/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string | null;  // Updated image type to handle null case
  price_id:string;
}

export default function AddToCart({ name, description, price, currency, image, price_id }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

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
      className="w-full hover:text-white shadow-md  hover:bg-[#4E4D93]"
      onClick={() => {
        addItem(Product); // Add the product to the cart
        handleCartClick(); // Open the cart when item is added
      }}
    >
      Add to Cart
    </Button>
  );
}
