import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🏪</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  RISHABH ELECTRONICS
                </h3>
              </div>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Your one-stop shop for all electronics and furniture needs. Serving with trust and quality since 2014.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-sm">
                  📞 Contact Us
                </Link>
                <Link href="/products" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-sm">
                  🛍️ Our Products
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🔗</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300"> Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300"> Products</span>
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300"> Brands</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300"> Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">📞 Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Store Information */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">📍</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  Visit Our Store
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">Shop No.1,Kediya Vyapar Bihar, Ambedkar Chowk, Baloda Bazar, Raipur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <a href="tel:+919926480250" className="text-gray-300 hover:text-white transition-colors font-medium">
                      +91 99264 80250
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="text-white text-sm" />
                  </div>
                  <div>
                    <a href="https://wa.me/919926480250" className="text-gray-300 hover:text-white transition-colors font-medium">
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300">Sat-Thu: 10:00 AM - 9:00 PM</p>
                    <p className="text-gray-400 text-sm">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 inline-block">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-2xl">⭐</span>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Trusted Since 2014
                </p>
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} RISHABH ELECTRONICS. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Made with ❤️ for our valued customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;