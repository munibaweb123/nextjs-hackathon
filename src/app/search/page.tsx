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



// The SearchPage component is a Server Component by default in the app directory.
const SearchPage = async ({ searchParams }: { searchParams: Promise<{ query: string } >}) => {
  const searchQuery = (await searchParams).query || '';
  
  // Fetch products based on the search query from Sanity
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

  let products: Product[] = [];
  
  try {
    products = await client.fetch(query, { searchQuery });
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="md:max-w-[1440px] w-full h-auto mx-auto">
      <div className="w-[1280px] mx-auto">
        <h1 className="text-4xl my-8">Search Results for: {searchQuery}</h1>
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
  );
};

export default SearchPage;
