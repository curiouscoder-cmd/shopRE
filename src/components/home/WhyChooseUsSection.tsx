import { FaCheckCircle, FaShippingFast, FaTools, FaPercent, FaCreditCard, FaWarehouse } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  {
    id: 1,
    icon: <FaWarehouse className="text-4xl text-blue-600" />,
    title: 'Huge Variety Under One Roof',
    description: 'Find everything you need for your home and office in one place.'
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-blue-600" />,
    title: 'Latest Products & Trusted Brands',
    description: 'We stock only the latest models from brands you can trust.'
  },
  {
    id: 3,
    icon: <FaTools className="text-4xl text-blue-600" />,
    title: 'After-Sales Service',
    description: 'Our relationship doesn\'t end after purchase. We provide excellent after-sales support.'
  },
  {
    id: 4,
    icon: <FaShippingFast className="text-4xl text-blue-600" />,
    title: 'Fast Delivery & Installation',
    description: 'Quick delivery and professional installation for all products.'
  },
  {
    id: 5,
    icon: <FaPercent className="text-4xl text-blue-600" />,
    title: 'Best Offline Deals',
    description: 'Visit our store to get exclusive deals you won\'t find online.'
  },
  {
    id: 6,
    icon: <FaCreditCard className="text-4xl text-blue-600" />,
    title: 'EMI Options Available',
    description: 'Flexible payment options with EMI available on major credit cards.'
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="section bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of satisfied customers across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 card-3d border border-white/50 group-hover:border-purple-200/50 h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 transform group-hover:scale-110">
                      <div className="text-3xl text-blue-600 group-hover:text-purple-600 transition-colors">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Floating Accent */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                      <span className="text-white text-xs">✨</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-bold gradient-text">Ready to Experience the Difference?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Join thousands of satisfied customers who have made us their trusted electronics and furniture partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                🛍️ Browse Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                📍 Visit Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;