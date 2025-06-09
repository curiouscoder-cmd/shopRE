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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">RISHABH ELECTRONICS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="font-medium hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link href="/brands" className="font-medium hover:text-blue-600 transition-colors">
            Brands
          </Link>
          <Link href="/gallery" className="font-medium hover:text-blue-600 transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/products" className="font-medium hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="/brands" className="font-medium hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Brands
            </Link>
            <Link href="/gallery" className="font-medium hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
