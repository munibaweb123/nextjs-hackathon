'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // This is the correct hook to use
import client from '@/sanity/lib/client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import Link from 'next/link';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  slug: { current: string };
  price_id: string;
  tags: string;
}

const SearchPage = () => {
  const searchParams = useSearchParams(); // Use searchParams to access URL query
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query state

  // Get the query parameter from URL for the search term
  useEffect(() => {
    const query = searchParams.get('query') || ''; // Using searchParams to get query
    setSearchQuery(query);
  }, [searchParams]);

  // Fetch products based on search query
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && (name match $searchQuery || description match $searchQuery)]{
          _id,
          "image": image.asset->url,
          name,
          price,
          description,
          slug,
          price_id,
          tags
        }`;

        const productsData: Product[] = await client.fetch(query, {
          searchQuery, // Passing the search query to the GROQ query
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchQuery]); // Re-run when searchQuery changes

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="md:max-w-[1440px] w-full h-auto mx-auto">
        {/* Search Results */}
        <div>
          <div className="w-[1280px] mx-auto">
            <h1 className="text-4xl my-8">Search Results</h1>
          </div>

          {/* Grid of Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {products.length > 0 ? (
              products.map((product) => (
                <Card key={product._id} className="w-full">
                  <CardContent className="flex flex-col items-center justify-center">
                    <CardHeader>
                      <Link href={`/product/${product.slug.current}`}>
                        <Image
                          src={product.image || '/product1.png'}
                          alt={product.name}
                          height={1000}
                          width={1000}
                          className="h-full w-full object-cover cursor-pointer"
                        />
                      </Link>
                    </CardHeader>

                    <CardFooter className="flex items-center justify-between w-full h-[63px]">
                      <p className="font-bold text-2xl">{product.name}</p>
                      <p>£{product.price}</p>
                    </CardFooter>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No products found for this search query.</p>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SearchPage;
