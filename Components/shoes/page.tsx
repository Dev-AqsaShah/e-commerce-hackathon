// import Link from "next/link";
// import Image from "next/image";
// import React from "react";

// const products = [
//   { id: 1, name: "Nike Air Max", category: "Men's Shoes", color: "Red", price: "₹ 7,999", description: "Stylish and comfortable shoes.", image: "/assets/hero1.png" },
//   { id: 2, name: "Nike React Infinity", category: "Women's Shoes", color: "Blue", price: "₹ 9,499", description: "Perfect for long runs.", image: "/assets/p1.png" },
//   { id: 3, name: "Nike Pegasus 40", category: "Men's Shoes", color: "Green", price: "₹ 8,999", description: "Reliable for everyday wear.", image: "/assets/p2.png" },
//   { id: 4, name: "Nike Zoom Fly 5", category: "Women's Shoes", color: "Yellow", price: "₹ 10,499", description: "Speed and performance at its best.", image: "/assets/p3.png" },
//   { id: 5, name: "Nike Revolution 6", category: "Men's Shoes", color: "Black", price: "₹ 5,499", description: "Affordable and durable shoes.", image: "/assets/p4.png" },
//   { id: 6, name: "Nike Air Zoom", category: "Women's Shoes", color: "Pink", price: "₹ 12,499", description: "Lightweight with extra cushioning.", image: "/assets/p5.png" },
//   { id: 7, name: "Nike Free Run 5.0", category: "Men's Shoes", color: "White", price: "₹ 6,999", description: "Freedom of movement.", image: "/assets/p6.png" },
//   { id: 8, name: "Nike Court Legacy", category: "Women's Shoes", color: "Purple", price: "₹ 8,999", description: "Classic style with modern features.", image: "/assets/p7.png" },
//   { id: 9, name: "Nike Quest 4", category: "Men's Shoes", color: "Gray", price: "₹ 4,999", description: "Everyday shoes for running.", image: "/assets/p8.png" },
//   { id: 10, name: "Nike Winflo 10", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Perfect for road running.", image: "/assets/p9.png" },
//   { id: 11, name: "Nike Winflo 13", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Enhanced with better grip.", image: "/assets/p10.png" },
//   { id: 12, name: "Nike Winflo 18", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Improved comfort for long runs.", image: "/assets/p11.png" },
// ];

// const ProductsPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
//             <Link href={`/products/${product.id}`}>
//               <div>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//               </div>
//             </Link>
//             <p className="text-sm text-gray-700 font-semibold mt-2">MRP: {product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
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
      position : "top-right",
      icon : "success",
      title : `${product.productName} added to cart`,
      showConfirmButton : false,
      timer : 2000
    })
    addToCart(product)
    
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug?.current}`} key={product._id}>
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
              onClick={(e) => handleAddToCart(e, product) }
              >
                Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
