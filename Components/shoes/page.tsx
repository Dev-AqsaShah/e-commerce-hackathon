"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SHOES = () => {
  const [product, setProduct] = useState<product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchProduct: product[] = await client.fetch(allProducts);
      setProduct(fetchProduct);
    }
    fetchproduct();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Latest Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center text-center"
          >
            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            {/* Product Name */}
            <h2 className="text-lg font-semibold mt-4 text-gray-700">
              {product.productName}
            </h2>

            {/* Product Price */}
            <p className="text-gray-600 mt-2 text-sm">
              <span className="font-medium text-gray-800">${product.price}</span>
            </p>

            {/* Button */}
            {/* <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
