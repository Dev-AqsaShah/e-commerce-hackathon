"use client";

import { FaRegHeart, FaSearch } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Link href="/" className="hover:text-gray-500">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-4 sm:space-x-2 lg:space-x-6 text-sm font-medium text-gray-800">
        <Link
          href="/products"
          className="hover:text-gray-500 hidden sm:block lg:inline-block"
        >
          New & Featured
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs sm:text-sm"
        >
          Men
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs sm:text-sm"
        >
          Women
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
        >
          Kids
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs sm:text-sm"
        >
          Sale
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
        >
          SNKRS
        </Link>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-3  sm:space-x-4">
        {/* Search Icon */}
        <FaSearch className="text-base sm:text-lg text-gray-500 cursor-pointer" />

        {/* Wishlist */}
        <Link href="/Checkout">
          <FaRegHeart className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>

        {/* Shopping Bag */}
        <Link href="/cart">
          <RiShoppingBagLine className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
