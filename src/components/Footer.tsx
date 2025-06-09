import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RISHABH ELECTRONICS</h3>
            <p className="mb-4">Your one-stop shop for all electronics and furniture needs. Serving with trust and quality since 2005.</p>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="btn-primary text-sm">
                Contact Us
              </Link>
              <Link href="/products" className="btn-secondary text-sm">
                Our Products
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-blue-400 transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Our Store</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                123 Main Street, Your City, State 12345
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+919876543210" className="hover:text-blue-400">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <a href="https://wa.me/919876543210" className="hover:text-blue-400">
                  WhatsApp Us
                </a>
              </p>
              <p className="flex items-center">
                <FaClock className="mr-2" />
                Mon-Sat: 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} RISHABH ELECTRONICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;