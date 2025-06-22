'use client';

import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contact & Visit Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p>Shop No.1,Kediya Vyapar Bihar, Ambedkar Chowk, Baloda Bazar, Raipur, 493332</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p>
                    <a href="tel:+919926480250" className="hover:text-blue-600 transition-colors">
                      +91 99264 80250
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaWhatsapp className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/9926480250" className="hover:text-blue-600 transition-colors">
                      Message us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p>Saturday-Thursday: 10:00 AM - 9:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-xl mb-2">Have a query?</h4>
              <p className="mb-4">Just give us a call or drop in!</p>
              <Link href="/contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg relative">
            {/* Latest Google Maps with current satellite imagery */}
            <iframe
              src="https://maps.google.com/maps?q=21.6637,81.3498&hl=en&z=18&t=h&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="RISHABH ELECTRONICS Store Location - Baloda Bazar, Raipur"
            ></iframe>

            {/* Store info overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">RISHABH ELECTRONICS</h4>
                  <p className="text-xs text-gray-600">📍 Baloda Bazar, Raipur</p>
                  <p className="text-xs text-blue-600 font-medium">Open Now</p>
                </div>
              </div>
            </div>

            {/* Interactive buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <a
                href="https://maps.google.com/maps?q=Shop+No.1+Kediya+Vyapar+Bihar+Ambedkar+Chowk+Baloda+Bazar+Raipur+493332"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>🗺️</span>
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => window.open('https://maps.google.com/maps/@21.6637,81.3498,17z/data=!3m1!1e1', '_blank')}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>🗺️</span>
                <span>Road View</span>
              </button>

              <button
                onClick={() => window.open('https://maps.google.com/maps/place/Ambedkar+Chowk,+Baloda+Bazar,+Chhattisgarh/@21.6637,81.3498,17z', '_blank')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>📍</span>
                <span>Open in Maps</span>
              </button>
            </div>

            {/* Map type indicator */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-gray-200">
              <div className="text-xs text-gray-600 font-medium flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>🛰️ Satellite View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;