import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us - RISHABH ELECTRONICS',
  description: 'Get in touch with RISHABH ELECTRONICS. Visit our store or contact us for inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, support, or to visit our showroom. We&apos;re here to help!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl">📞</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
              </div>

              <div className="space-y-8">
                <div className="group relative">
                  <div className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">Our Location</h3>
                      <p className="text-gray-600 leading-relaxed">Shop No.1,Kediya Vyapar Bihar, Ambedkar Chowk, Baloda Bazar, Raipur</p>
                      <p className="mt-2 text-sm text-gray-500">Landmark: Near Bajpai Nursing Home</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="flex items-start p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl hover:from-green-100 hover:to-teal-100 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition-colors">Call Us</h3>
                      <p className="mb-1">
                        <a href="tel:+919926480250" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                          +91 9926480250
                        </a>
                      </p>
                      <p>
                        <a href="tel:+918226001080" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                          +91 8226001080
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="flex items-start p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl hover:from-emerald-100 hover:to-green-100 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">WhatsApp</h3>
                      <p>
                        <a href="https://wa.me/9926480250" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                          Message us on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="flex items-start p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-800 group-hover:text-red-700 transition-colors">Email</h3>
                      <p>
                        <a href="mailto:info@rishabhelectronics.com" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                          rishabhelec76@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="flex items-start p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FaClock className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">Business Hours</h3>
                      <p className="text-gray-600 leading-relaxed">Saturday - Thursday: 10:00 AM - 9:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl">✉️</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-3 font-semibold text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-3 font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-3 font-semibold text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Enter your message or inquiry"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <span>📤</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 text-lg">Visit our showroom and experience our products firsthand</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              {/* Map Placeholder with Beautiful Design */}
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
              </div>

              {/* Floating Location Pin */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce">
                📍
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🚗</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Visit Our Showroom
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Come and explore our wide range of electronics and furniture. Our friendly staff is ready to assist you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                🗺️ Get Directions
              </a>
              <a href="tel:+919876543210" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
              