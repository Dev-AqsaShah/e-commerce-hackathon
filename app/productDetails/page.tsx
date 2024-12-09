"use client";

import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 p-6 max-w-5xl mx-auto">
      {/* Left Side - Product Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/assets/p1.png" // Replace with your image path
          alt="Product Name"
          width={600}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Product Name */}
        <h1 className="text-4xl font-bold text-gray-800">NIKE REACT INFINITY</h1>

        {/* Product Description */}
        <p className="text-gray-600 leading-relaxed">
          This is a detailed description of the product. It explains the key
          features and benefits, helping the customer understand why they need
          this product in their life.
        </p>

        {/* Color Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Color:</h3>
          <div className="flex space-x-4">
            <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-transparent hover:border-gray-800"></button>
            <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-gray-800"></button>
            <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent hover:border-gray-800"></button>
          </div>
        </div>

        {/* Size Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Size:</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200">
              S
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200">
              M
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200">
              L
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-800 hover:bg-gray-200">
              XL
            </button>
          </div>
        </div>

        {/* Price */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">$120.00</h2>
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
