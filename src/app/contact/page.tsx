import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us - RISHABH ELECTRONICS',
  description: 'Get in touch with RISHABH ELECTRONICS. Visit our store or contact us for inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Our Location</h3>
                <p>123 Main Street, Your City, State 12345</p>
                <p className="mt-2 text-sm text-gray-600">Landmark: Near City Mall</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaPhone className="text-blue-600 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p>
                  <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">
                    +91 98765 43210
                  </a>
                </p>
                <p>
                  <a href="tel:+919876543211" className="hover:text-blue-600 transition-colors">
                    +91 98765 43211
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaWhatsapp className="text-blue-600 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p>
                  <a href="https://wa.me/919876543210" className="hover:text-blue-600 transition-colors">
                    Message us on WhatsApp
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaEnvelope className="text-blue-600 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p>
                  <a href="mailto:info@rishabhelectronics.com" className="hover:text-blue-600 transition-colors">
                    info@rishabhelectronics.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaClock className="text-blue-600 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Business Hours</h3>
                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message or inquiry"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-600">Map will be integrated here</p>
        </div>
      </div>
    </div>
  );
}
              