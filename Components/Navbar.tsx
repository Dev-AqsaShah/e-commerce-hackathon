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
      <div className="flex space-x-2 sm:space-x-2 lg:space-x-8 text-sm font-medium  text-gray-800 justify-center  xl:ml-20">
        <Link
          href="/products"
          className="hover:text-gray-500 hidden sm:block lg:inline-block"
        >
          New & Featured
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
        >
          Men
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
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
          Products
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-500 text-xs hidden sm:block sm:text-sm"
        >
          SNKRS
        </Link>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center border rounded-full px-3 py-2 text-sm text-gray-700 bg-gray-100 xl:ml-56 lg:ml-40">
  <FaSearch className="mr-2 text-gray-500 cursor-pointer" />
  <input
    type="text"
    placeholder="Search"
    className="bg-transparent outline-none w-16 sm:w-10 md:w-40 lg:w-44 xl:w-58 placeholder:hidden sm:placeholder:block"
  />
</div>



        {/* Wishlist */}
        <Link href="/Checkout">
          <FaRegHeart className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>

        {/* Shopping Bag */}
        <Link href="/cart">
          <RiShoppingBagLine className="text-base sm:text-lg hover:text-gray-500 cursor-pointer" />
        </Link>
    </nav>
  );
};

export default Navbar;
