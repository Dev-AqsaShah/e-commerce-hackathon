"use client";

import { useEffect, useState } from "react";
import CheckoutButton from "@/Components/CheckoutButton";

export default function Home() {
  const [cartItems, setCartItems] = useState<{ name: string; price: number; quantity: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nike Store</h1>

      {cartItems.length > 0 ? (
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            {cartItems.map((product, index) => (
              <li key={index} className="flex justify-between border-b pb-3">
                <span className="text-lg font-medium text-gray-700">{product.name}</span>
                <span className="text-gray-600">${product.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            <CheckoutButton items={cartItems} />
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg mt-4">Your cart is empty</p>
      )}
    </div>
  );
}
