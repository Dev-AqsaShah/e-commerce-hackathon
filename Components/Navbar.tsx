"use client";

import { FaRegHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initial state set to false

  useEffect(() => {
    // This effect ensures that the component is only using client-side rendering
    // and doesn't show the menu open immediately when the page is loaded.
    setIsMenuOpen(false); // Ensuring the menu starts closed after hydration
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a product name to search.");
    } else {
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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

      {/* Center - Navigation Links (Hidden on Small Screens) */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-20 flex flex-col items-start justify-start gap-6 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:static lg:flex-row lg:gap-10 lg:transform-none lg:text-sm lg:font-medium lg:items-center lg:space-x-4 text-gray-800`}
      >
        {/* Close Icon */}
        <FaTimes
          className="text-2xl text-gray-800 cursor-pointer self-end mb-4 lg:hidden"
          onClick={toggleMenu}
        />

        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          New & Featured
        </Link>
        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          Men
        </Link>
        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          Women
        </Link>
        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          Kids
        </Link>
        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          Sale
        </Link>
        <Link href="/products" className="hover:text-gray-500" onClick={toggleMenu}>
          SNKRS
        </Link>
      </div>

      {/* Right Side - Icons */}
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

        {/* Hamburger Menu Toggle */}
        <div className="lg:hidden">
          <FaBars
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
