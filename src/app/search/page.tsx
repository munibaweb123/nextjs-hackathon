import client from "@/sanity/lib/client";
import ProductCard from "../components/product";
import { groq } from "next-sanity";

// Define Product interface
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
}

// Define Props interface
interface SearchParams {
  query?: string | string[]; // Allow `query` to be a string, array, or undefined
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Extract and validate the `query` parameter
  const query = (await searchParams).query;

  // Type guard to ensure `query` is a string
  if (typeof query !== "string") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Search Results</h1>
        <p className="text-gray-500">No query provided or invalid query type.</p>
      </div>
    );
  }

  // Define GROQ query
  const sanityQuery = groq`*[_type == "product" && (name match $query || description match $query || categories[]->name match $query)]{
    _id,
    "slug": slug.current,
    name,
    description,
    price,
    "imageUrl": image.asset->url
  }`;

  // Fetch data from Sanity
  const params = { query };
  const fetchedProducts: Product[] = await client.fetch(sanityQuery, {params});

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for &quot;{query || "All"}&quot;
      </h1>

      {fetchedProducts.length === 0 && (
        <p className="text-gray-500">No products found.</p>
      )}

      {fetchedProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fetchedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
