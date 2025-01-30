import client from "@/sanity/lib/client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: number;
  description: string;
  slug: { current: string }; // Correct slug structure from Sanity
  price_id: string;
  tags: string[];
}

const Popular = async () => {
  // Sanity query to fetch products with the 'new ceramics' tag
  const query = `*[_type == 'product' && 'popular products' in tags]{
    "image": image.asset->url,
    name,
    price,
    description,
    slug, // Fetch slug object
    price_id,
    tags
  }`;

  const res: Product[] = await client.fetch(query);

  return (
    <div className="md:max-w-[1440px] w-full h-auto mx-auto">
      {/* New Ceramics Section */}
      <div>
        <div className="w-[1280px] mx-auto">
          <h1 className="text-4xl my-8">Popular Products</h1>
        </div>

        {/* Carousel Container */}
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {/* Map through the products */}
            {res.map((product: Product, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <Card className="w-full">
                  <CardContent className="flex flex-col items-center justify-center ">
                    <CardHeader >
                      <Link href={`/product/${product.slug.current}`}>
                        <Image
                          src={product.image || "/product1.png"}
                          alt={product.name}
                          height={1000}
                          width={1000}
                          className="h-full w-full object-cover cursor-pointer aspect-square"
                        />
                      </Link>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between w-full h-[63px]">
                      <p className="font-bold text-2xl">{product.name}</p>
                      <p>£{product.price}</p>
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
