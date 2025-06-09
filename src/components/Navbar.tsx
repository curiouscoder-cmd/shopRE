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
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-500">
              RISHABH ELECTRONICS
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <span className="relative z-10"> Home</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="/products" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <span className="relative z-10"> Products</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="/brands" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <span className="relative z-10"> Brands</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="/gallery" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <span className="relative z-10"> Gallery</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link href="/contact" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
            <span className="relative z-10">📞 Contact Us</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md py-6 px-4 shadow-2xl border-t border-white/20">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 hover:shadow-lg"
              onClick={toggleMenu}
            >
              <span className="flex items-center space-x-3">
                <span>🏠</span>
                <span>Home</span>
              </span>
            </Link>
            <Link
              href="/products"
              className="font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 hover:shadow-lg"
              onClick={toggleMenu}
            >
              <span className="flex items-center space-x-3">
                <span>🛍️</span>
                <span>Products</span>
              </span>
            </Link>
            <Link
              href="/brands"
              className="font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 hover:shadow-lg"
              onClick={toggleMenu}
            >
              <span className="flex items-center space-x-3">
                <span>🏷️</span>
                <span>Brands</span>
              </span>
            </Link>
            <Link
              href="/gallery"
              className="font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 hover:shadow-lg"
              onClick={toggleMenu}
            >
              <span className="flex items-center space-x-3">
                <span>📸</span>
                <span>Gallery</span>
              </span>
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 hover:shadow-lg"
              onClick={toggleMenu}
            >
              <span className="flex items-center space-x-3">
                <span>📞</span>
                <span>Contact Us</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
