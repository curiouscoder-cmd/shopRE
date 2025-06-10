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
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98776548459448!3d40.74844397932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1638461460188!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;