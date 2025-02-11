
"use client";

import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Shoes = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data: product[] = await client.fetch(allProducts);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 2000
    })
    addToCart(product)

  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          console.log(`Product ${index} ID:`, product._id); // Debugging

          return (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="border rounded-lg shadow-md hover:shadow-lg transition p-4 cursor-pointer">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-4 text-gray-700">
                  {product.productName}
                </h2>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium text-gray-800">
                    ${product.price}
                  </span>
                </p>
                <button
                  className="bg-gradient-to-r from-green-500 to-green-800 text-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
