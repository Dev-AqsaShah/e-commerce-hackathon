
"use client"

import { product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<product[]>([]);

  useEffect(() => {
    setCartItems(getItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it.",
    }).then((Result) => {
      if (Result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getItems());
        Swal.fire("Removed", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, proceed.",
    }).then((Result) => {
      if (Result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <h2 className="text-xl font-semibold">Your cart is empty!</h2>
          <p className="mt-2">Browse our products and add items to your cart.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-4"
              >
                {/* Product Image */}
                  {item.image && (
                      <Image
                      src={urlFor(item.image).url()}
                      className="w-16 h-16 object-cover rounded-lg"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  )}
                  

                {/* Product Details */}
                <div className="flex-1 px-4">
                  <h2 className="font-semibold text-lg">{item.productName}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
