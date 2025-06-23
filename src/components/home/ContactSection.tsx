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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1854.1016299679113!2d82.16264626762715!3d21.655949110331267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28808ef47a426d%3A0xb45508996ea12f3!2sRISHABH%20ELECTRONICS%20AND%20FURNITURE!5e0!3m2!1sen!2ssg!4v1750664976690!5m2!1sen!2ssg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            
            
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;