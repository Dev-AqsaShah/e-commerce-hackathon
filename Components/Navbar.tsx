"use client"

import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { RiShoppingBagLine } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Placeholder functionality - you can integrate API or real data later
    if (searchQuery.trim() === '') {
      alert('Please enter a product name to search.');
    } else {
      console.log(`Searching for: ${searchQuery}`);
      // Implement search navigation or API call here
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Link href="/" className='hover:text-gray-500'>
        <Image
          src="/assets/logo.png" // Replace with your logo image in the public folder
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden lg:flex space-x-4 text-sm font-medium text-gray-800 gap-10">
        <Link href="/products" className="hover:text-gray-500">
          New & Featured
        </Link>
        <Link href="/products" className="hover:text-gray-500">
          Men
        </Link>
        <Link href="/products" className="hover:text-gray-500">
          Women
        </Link>
        <Link href="/products" className="hover:text-gray-500">
          Kids
        </Link>
        <Link href="/products" className="hover:text-gray-500">
          Sale
        </Link>
        <Link href="/products" className="hover:text-gray-500">
          SNKRS
        </Link>
      </div>

      {/* Right Side - Search, Wishlist, Shopping Bag */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="flex items-center border rounded-full px-3 py-2 text-sm text-gray-700 bg-gray-100">
          <FaSearch
            className="mr-2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none w-24 lg:w-38"
          />
        </div>

        {/* Wishlist */}
        <Link href="/Checkout">
          <FaRegHeart className="text-xl hover:text-gray-500 cursor-pointer" />
        </Link>

        {/* Shopping Bag */}
        <Link href="/cart">
          <RiShoppingBagLine className="text-xl hover:text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
