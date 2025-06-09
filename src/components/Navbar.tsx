'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <span className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300">
              RISHABH ELECTRONICS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Home
          </Link>
          <Link href="/products" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Products
          </Link>
          <Link href="/brands" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Brands
          </Link>
          <Link href="/gallery" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Gallery
          </Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md py-6 px-4 shadow-xl border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              onClick={toggleMenu}
            >
              🏠 Home
            </Link>
            <Link
              href="/products"
              className="font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              onClick={toggleMenu}
            >
              🛍️ Products
            </Link>
            <Link
              href="/brands"
              className="font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              onClick={toggleMenu}
            >
              🏷️ Brands
            </Link>
            <Link
              href="/gallery"
              className="font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              onClick={toggleMenu}
            >
              📸 Gallery
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              onClick={toggleMenu}
            >
              📞 Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
