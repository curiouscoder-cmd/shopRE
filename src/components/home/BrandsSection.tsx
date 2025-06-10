import { brands } from '@/data/brands';
import BrandImage from '@/components/ui/BrandImage';

const BrandsSection = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Brands We Deal In</h2>
          <p className="text-xl text-gray-600 mb-4">Authorized Dealer of Top Brands You Trust</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-3d border border-gray-100 group-hover:border-purple-200">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Brand Logo */}
                  <BrandImage
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    brandName={brand.name}
                  />

                  {/* Brand Name */}
                  <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-purple-700 transition-colors">
                    {brand.name}
                  </h3>

                  {/* Category Badge */}
                  <span className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                    brand.category === 'electronics'
                      ? 'bg-blue-100 text-blue-700'
                      : brand.category === 'furniture'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {brand.category === 'both' ? 'Electronics & Furniture' : brand.category}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  ✓
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-4xl">🤝</div>
            <div className="text-left">
              <h3 className="font-bold text-lg gradient-text">Trusted Partnerships</h3>
              <p className="text-gray-600">Official authorized dealer with warranty support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;