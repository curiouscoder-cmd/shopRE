
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="section bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our success and why thousands of customers trust us for their electronics and furniture needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with 3D Effect */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-[400px] w-full flex items-center justify-center card-3d">
                <div className="text-center">
                  <div className="text-6xl mb-4"></div>
                  <h3 className="text-2xl font-bold gradient-text">Our Showroom</h3>
                  <p className="text-gray-600 mt-2">Visit us to experience our products</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl float">
              ⭐
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl float-delay-1">
              🎯
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Since <span className="font-semibold text-blue-600">2014</span>, RISHABH ELECTRONICS has been the trusted name for quality electronics and furniture in the region.
                  What started as a small shop has now grown into a premier destination for all your home and office needs.
                </p>
                <p className="text-lg">
                  Our commitment to <span className="font-semibold text-purple-600">quality, customer satisfaction, and after-sales service</span> has earned us the reputation of being
                  the most reliable electronics and furniture store in town.
                </p>
                <p className="text-lg">
                  We take pride in offering a wide range of products from <span className="font-semibold text-indigo-600">trusted brands</span>, ensuring that our customers get nothing but the best.
                </p>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 text-center card-3d group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-bold text-3xl gradient-text mb-2">11+</h4>
                <p className="text-gray-600 font-medium">Years of Excellence</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center card-3d group hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                <div className="text-4xl mb-2">❤️</div>
                <h4 className="font-bold text-3xl gradient-text mb-2">5000+</h4>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Visit Our Store</span>
                <span>🏪</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;