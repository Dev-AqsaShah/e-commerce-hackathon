
"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, {useEffect, useState } from "react";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    (async() => {
      const data = await client.fetch(`*[_type == "product" && _id == "${params.slug}"][0]`);
      setProduct(data);
  })();
}, [])

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 p-6 max-w-5xl mx-auto">
      {/* Left Side - Product Image */}
      <div className="w-full lg:w-1/2">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.productName}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <h2 className="text-2xl font-semibold text-gray-800">₹ {product.price}</h2>

        {/* Color Options */}
        {product.color && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-800">Color:</h3>
            <div className="flex space-x-4">
              {product.color.map((color: string, index: number) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 border-transparent hover:border-gray-800`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Size Options */}
        {product.size && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-800">Size:</h3>
            <div className="flex space-x-4">
              {product.size.map((size: string, index: number) => (
                <button
                  key={index}
                  className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
