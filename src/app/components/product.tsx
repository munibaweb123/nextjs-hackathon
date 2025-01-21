// components/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  slug: { current: string };
  
  name: string
  description: string
  price: number
  imageUrl: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      {product.imageUrl && (
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
      <Link href={`/product/${product.slug}`} className="text-primary hover:underline">
        View Details
      </Link>
    </div>
  )
}
