'use client';

import { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Link from 'next/link';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  slug: { current: string }; // Correct slug structure from Sanity
  price_id: string;
  tags: string;
}

interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

const Ceramics = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Fetch all categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesQuery = `*[_type == "category"]{_id, name, "slug": slug.current}`;
        const categoriesData: Category[] = await client.fetch(categoriesQuery);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };


  // Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryFilter = selectedCategory
        ? `&& references(*[_type == "category" && _id == "${selectedCategory}"]._id)`
        : "";

      const query = `*[_type == "product" ${categoryFilter}]{
        _id,
        "image": image.asset->url,
        name,
        price,
        description,
        slug,
        price_id,
        tags
      }`;
      
        const productsData: Product[] = await client.fetch(query);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="md:max-w-[1440px] w-full h-auto mx-auto">
      {/* Dropdown to Filter by Category */}
      <div className="w-[1280px] mx-auto my-4">
      <select
  value={categories.find((category) => category._id === selectedCategory)?.slug.current}
  onChange={handleCategoryChange}
  className="border p-2 rounded"
>
  <option value="">All Categories</option>
  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ))}
</select>

      </div>

      {/* New Ceramics Section */}
      <div>
        <div className="w-[1280px] mx-auto">
          <h1 className="text-4xl my-8">All Products</h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Map through the products */}
          {products.length > 0 ? (
            products.map((product) => (
              <Card key={product._id} className="w-full">
                <CardContent className="flex flex-col items-center justify-center">
                  <CardHeader>
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
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ceramics;
