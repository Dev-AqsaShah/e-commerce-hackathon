import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

const products = [
  { id: 1, name: "Nike Air Max", category: "Men's Shoes", color: "Red", size: ["S", "M", "L", "XL"], price: "₹ 7,999", description: "Stylish and comfortable shoes.", image: "/assets/hero1.png" },
  { id: 2, name: "Nike React Infinity", category: "Women's Shoes", color: "Blue", size: ["S", "M", "L", "XL"], price: "₹ 9,499", description: "Perfect for long runs.", image: "/assets/p1.png" },
  { id: 3, name: "Nike Pegasus 40", category: "Men's Shoes", color: "Green", size: ["S", "M", "L", "XL"], price: "₹ 8,999", description: "Reliable for everyday wear.", image: "/assets/p2.png" },
  { id: 4, name: "Nike Zoom Fly 5", category: "Women's Shoes", color: "Yellow", size: ["S", "M", "L", "XL"], price: "₹ 10,499", description: "Speed and performance at its best.", image: "/assets/p3.png" },
  { id: 5, name: "Nike Revolution 6", category: "Men's Shoes", color: "Black", size: ["S", "M", "L", "XL"], price: "₹ 5,499", description: "Affordable and durable shoes.", image: "/assets/p4.png" },
  { id: 6, name: "Nike Air Zoom", category: "Women's Shoes", color: "Pink", size: ["S", "M", "L", "XL"], price: "₹ 12,499", description: "Lightweight with extra cushioning.", image: "/assets/p5.png" },
  { id: 7, name: "Nike Free Run 5.0", category: "Men's Shoes", color: "White", size: ["S", "M", "L", "XL"], price: "₹ 6,999", description: "Freedom of movement.", image: "/assets/p6.png" },
  { id: 8, name: "Nike Court Legacy", category: "Women's Shoes", color: "Purple", size: ["S", "M", "L", "XL"], price: "₹ 8,999", description: "Classic style with modern features.", image: "/assets/p7.png" },
  { id: 9, name: "Nike Quest 4", category: "Men's Shoes", color: "Gray", size: ["S", "M", "L", "XL"], price: "₹ 4,999", description: "Everyday shoes for running.", image: "/assets/p8.png" },
  { id: 10, name: "Nike Winflo 10", category: "Women's Shoes", color: "Orange", size: ["S", "M", "L", "XL"], price: "₹ 7,499", description: "Perfect for road running.", image: "/assets/p9.png" },
  { id: 11, name: "Nike Winflo 13", category: "Women's Shoes", color: "Orange", size: ["S", "M", "L", "XL"], price: "₹ 7,499", description: "Enhanced with better grip.", image: "/assets/p10.png" },
  { id: 12, name: "Nike Winflo 18", category: "Women's Shoes", color: "Orange", size: ["S", "M", "L", "XL"], price: "₹ 7,499", description: "Improved comfort for long runs.", image: "/assets/p11.png" },
];

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 p-6 max-w-5xl mx-auto">
      {/* Left Side - Product Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{product.price}</h2>

        {/* Color Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Color:</h3>
          <div className="flex space-x-4">
            <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-transparent hover:border-gray-800"></button>
            <button className="w-8 h-8 rounded-full bg-blue-800 border-2 border-transparent hover:border-gray-800"></button>
            <button className="w-8 h-8 rounded-full bg-black border-2 border-transparent hover:border-gray-800"></button>
          </div>
        </div>

        {/* Size Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Size:</h3>
          <div className="flex space-x-4">
            {product.size.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
