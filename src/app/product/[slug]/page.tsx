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
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
}

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Query to fetch the current product details
  const query = `*[_type == 'product' && slug.current == $slug][0]{
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    price_id,
    dimensions {
      height,
      width,
      depth
    },
    "slug": slug.current
  }`;

  // Query to fetch the next and previous products based on their slug
  const paginationQuery = `{
    "previous": *[_type == "product" && slug.current < $slug] | order(slug.current desc)[0]{ "slug": slug.current },
    "next": *[_type == "product" && slug.current > $slug] | order(slug.current asc)[0]{ "slug": slug.current }
  }`;

  // Fetch the product data
  const product: Product | null = await client.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  // Fetch the pagination data using the product's slug
  const pagination = await client.fetch(paginationQuery, { slug });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="w-full h-auto">
          <Image
            src={product.image || "/ceramic1.png"}
            alt={product.name || "Product image"}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{product.name}</h2>
          <p className="text-lg sm:text-xl font-medium">£{product.price}</p>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Description</h3>
            <p className="text-sm sm:text-base">{product.description}</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions */}
          {product.dimensions && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Dimensions</h3>
              <table className="border-collapse border border-gray-300 w-full mt-2 text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Height</th>
                    <th className="px-4 py-2 border">Width</th>
                    <th className="px-4 py-2 border">Depth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">{product.dimensions.height}</td>
                    <td className="px-4 py-2 border">{product.dimensions.width}</td>
                    <td className="px-4 py-2 border">{product.dimensions.depth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Add to Cart */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-4">
              <p>Amount:</p>
              <div className="w-[80px] h-[40px] bg-gray-100 flex justify-center items-center rounded-md">
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-10">
        {pagination.previous?.slug && (
          <a
            href={`/product/${pagination.previous.slug}`}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Previous
          </a>
        )}
        {pagination.next?.slug && (
          <a
            href={`/product/${pagination.next.slug}`}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Next
          </a>
        )}
      </div>

      {/* Additional Components */}
      <div className="flex flex-col mt-12 space-y-6">
        <Ceramics />
        <div className="flex justify-center">
          <button className="w-full sm:w-[192px] h-[56px] text-[#2A254B] bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition">
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