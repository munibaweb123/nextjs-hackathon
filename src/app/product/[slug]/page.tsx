import client from "@/sanity/lib/client";
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
import { notFound } from "next/navigation";

import Ceramics from "@/app/components/ceramics";
import Benefits from "@/app/components/benefits";
import Brand from "@/app/components/brand";

interface Product {
  price_id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  sizes: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

const ProductDetails =async({ params }: { params:Promise< {slug: string }> }) =>{
  const { slug } = await params; // Fix: Directly destructure id from params

  // Query to fetch the product details
  const query = `*[_type == 'product' && slug.current == $slug][0]{
     name, price, description, sizes, "image": image.asset->url, price_id, dimensions
  }`;

  // Fetch product data from Sanity
  const product: Product | null = await client.fetch(query, { slug });

  if (!product) {
    // If no product found, show 404 page
    notFound();
  }

  return (
    <div className="md:max-w-[1440px] mx-auto">
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 h-auto gap-8">
        {/* Image Section */}
        <div className="w-full md:w-[721px] h-[380px] md:h-[759px]">
          <Image
            src={product.image || "/ceramic1.png"}
            alt={product.name || "Product image"}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[721px] flex flex-col justify-center items-center p-4 md:p-10 space-y-8 md:space-y-12">
          <div className="w-full max-w-[602px] space-y-10">
            {/* Title and Price */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl">{product.name}</h2>
              <p className="text-lg md:text-xl">£{product.price}</p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl">Description</h3>
              <p className="text-sm md:text-base">{product.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="w-full">
                <h3 className="text-lg md:text-xl">Dimensions</h3>
                <table className="border-collapse border border-gray-300 w-full mt-2">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Height</th>
                      <th className="px-4 py-2 border">Width</th>
                      <th className="px-4 py-2 border">Depth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">{product.dimensions.height || "N/A"}</td>
                      <td className="px-4 py-2 border">{product.dimensions.width || "N/A"}</td>
                      <td className="px-4 py-2 border">{product.dimensions.depth || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Amount and Add to Cart */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
              <div className="w-full md:w-[209px] h-[46px] flex justify-between items-center">
                <p>Amount:</p>
                <div className="w-[122px] h-[46px] bg-[#f9f9f9] flex justify-center items-center">
                  <p>1</p>
                </div>
              </div>
              <AddToCart
                name={product.name}
                description={product.description}
                price={product.price}
                currency={"USD"}
                image={product.image}
                price_id={product.price_id}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <div className="flex flex-col">
        <Ceramics />
        <div className="flex items-center justify-center">
          <button className="md:w-[192px] h-[56px] text-[#2A254B] bg-[#f9f9f9] m-2 w-full">
            View collection
          </button>
        </div>
        <Benefits />
        <Brand />
      </div>
    </div>
  );
};

export default ProductDetails;
