import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

const products = [
    { id: 1, name: "Nike Air Max", category: "Men's Shoes", color: "Red", price: "₹ 7,999", description: "Stylish and comfortable shoes.", image: "/assets/hero1.png" },
    { id: 2, name: "Nike React Infinity", category: "Women's Shoes", color: "Blue", price: "₹ 9,499", description: "Perfect for long runs.", image: "/assets/p1.png" },
    { id: 3, name: "Nike Pegasus 40", category: "Men's Shoes", color: "Green", price: "₹ 8,999", description: "Reliable for everyday wear.", image: "/assets/p2.png" },
    { id: 4, name: "Nike Zoom Fly 5", category: "Women's Shoes", color: "Yellow", price: "₹ 10,499", description: "Speed and performance at its best.", image: "/assets/p3.png" },
    { id: 5, name: "Nike Revolution 6", category: "Men's Shoes", color: "Black", price: "₹ 5,499", description: "Affordable and durable shoes.", image: "/assets/p4.png" },
    { id: 6, name: "Nike Air Zoom", category: "Women's Shoes", color: "Pink", price: "₹ 12,499", description: "Lightweight with extra cushioning.", image: "/assets/p5.png" },
    { id: 7, name: "Nike Free Run 5.0", category: "Men's Shoes", color: "White", price: "₹ 6,999", description: "Freedom of movement.", image: "/assets/p6.png" },
    { id: 8, name: "Nike Court Legacy", category: "Women's Shoes", color: "Purple", price: "₹ 8,999", description: "Classic style with modern features.", image: "/assets/p7.png" },
    { id: 9, name: "Nike Quest 4", category: "Men's Shoes", color: "Gray", price: "₹ 4,999", description: "Everyday shoes for running.", image: "/assets/p8.png" },
    { id: 10, name: "Nike Winflo 10", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Perfect for road running.", image: "/assets/p9.png" },
    { id: 11, name: "Nike Winflo 13", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Enhanced with better grip.", image: "/assets/p10.png" },
    { id: 12, name: "Nike Winflo 18", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", description: "Improved comfort for long runs.", image: "/assets/p11.png" },
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
      <div className="w-full lg:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{product.price}</h2>
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
