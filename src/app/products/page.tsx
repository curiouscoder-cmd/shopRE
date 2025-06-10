import { categories } from '@/data/categories';
import Link from 'next/link';
import CategoryImage from '@/components/ui/CategoryImage';

export const metadata = {
  title: 'Products - RISHABH ELECTRONICS',
  description: 'Browse our wide range of electronics and furniture products.',
};

export default function ProductsPage() {
  const electronicsCategories = categories.filter(cat => cat.type === 'electronics');
  const furnitureCategories = categories.filter(cat => cat.type === 'furniture');

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
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our wide range of premium electronics and furniture, carefully curated from the world&apos;s most trusted brands
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Electronics Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-4xl">⚡</span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Electronics
                </h2>
                <span className="text-4xl">📱</span>
              </div>
              <p className="text-gray-600 text-lg">Latest technology for your modern lifestyle</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {electronicsCategories.map((category, index) => (
              <Link
                href={`/products/${category.id}`}
                key={category.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 group-hover:border-blue-200/50 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <CategoryImage
                      src={category.image}
                      alt={category.name}
                      categoryName={category.name}
                      categoryType={category.type}
                      fallbackClassName="flex items-center justify-center h-full"
                    />

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      →
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {category.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Furniture Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-4xl">🏠</span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Furniture
                </h2>
                <span className="text-4xl">🛋️</span>
              </div>
              <p className="text-gray-600 text-lg">Transform your space with premium furniture</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {furnitureCategories.map((category, index) => (
              <Link
                href={`/products/${category.id}`}
                key={category.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 group-hover:border-orange-200/50 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                    <CategoryImage
                      src={category.image}
                      alt={category.name}
                      categoryName={category.name}
                      categoryType={category.type}
                      fallbackClassName="flex items-center justify-center h-full"
                    />

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      →
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {category.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Need Help Choosing?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Our experts are here to help you find the perfect products for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📞 Contact Us
              </Link>
              <a href="tel:+919876543210" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📱 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}