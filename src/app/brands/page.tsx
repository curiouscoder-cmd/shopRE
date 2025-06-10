import { brands } from '@/data/brands';
import BrandImage from '@/components/ui/BrandImage';

export const metadata = {
  title: 'Brands - RISHABH ELECTRONICS',
  description: 'Explore the trusted brands we deal with at RISHABH ELECTRONICS.',
};

export default function BrandsPage() {
  const electronicsBrands = brands.filter(brand => brand.category === 'electronics' || brand.category === 'both');
  const furnitureBrands = brands.filter(brand => brand.category === 'furniture' || brand.category === 'both');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Our Brands
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Authorized dealer of top brands you trust - bringing you quality, reliability, and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Electronics Brands Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-4xl">⚡</span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Electronics Brands
                </h2>
                <span className="text-4xl">🔌</span>
              </div>
              <p className="text-gray-600 text-lg">Leading technology brands for modern living</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {electronicsBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 group-hover:border-blue-200/50">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Brand Logo */}
                    <BrandImage
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      brandName={brand.name}
                      fallbackClassName="w-24 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 transform group-hover:scale-110"
                    />

                    {/* Brand Name */}
                    <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-purple-700 transition-colors mb-2">
                      {brand.name}
                    </h3>

                    {/* Category Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 group-hover:bg-purple-100 group-hover:text-purple-700 transition-all duration-300">
                      {brand.category === 'both' ? 'Electronics & Furniture' : 'Electronics'}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    ✓
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Furniture Brands Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-4xl">🏠</span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Furniture Brands
                </h2>
                <span className="text-4xl">🛋️</span>
              </div>
              <p className="text-gray-600 text-lg">Premium furniture brands for elegant living</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {furnitureBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 group-hover:border-orange-200/50">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Brand Logo */}
                    <BrandImage
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      brandName={brand.name}
                      fallbackClassName="w-24 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300 transform group-hover:scale-110"
                    />

                    {/* Brand Name */}
                    <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-orange-700 transition-colors mb-2">
                      {brand.name}
                    </h3>

                    {/* Category Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 group-hover:bg-orange-100 group-hover:text-orange-700 transition-all duration-300">
                      {brand.category === 'both' ? 'Electronics & Furniture' : 'Furniture'}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    ✓
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🤝</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trusted Partnerships
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              We are official authorized dealers with warranty support and genuine products guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📍 Visit Our Store
              </a>
              <a href="tel:+919876543210" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}