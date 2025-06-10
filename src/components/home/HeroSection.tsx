import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-purple-500/20"></div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/20 rotate-45 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 border-2 border-blue-400/25 rotate-45 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>

        {/* Tech Icons Floating */}
        <div className="absolute top-20 right-1/4 text-4xl text-white/30 animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}>📱</div>
        <div className="absolute top-1/2 left-20 text-5xl text-white/30 animate-bounce" style={{animationDelay: '2s', animationDuration: '7s'}}>💻</div>
        <div className="absolute bottom-32 right-20 text-4xl text-white/30 animate-bounce" style={{animationDelay: '4s', animationDuration: '8s'}}>🏠</div>
        <div className="absolute top-1/3 left-1/3 text-3xl text-white/30 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}>⚡</div>
      </div>

      {/* Main Content */}
      <div className="container relative z-20 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium border border-white border-opacity-30 mb-6 shadow-lg">
              🏆 Trusted Since 2014
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Best Electronics &</span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Furniture Store
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 text-white">in Baloda Bazar</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience unbeatable deals, premium quality products, and exceptional service
            that has made us the most trusted name in electronics and furniture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center min-w-[200px]">
              🛍️ Explore Products
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center min-w-[200px]">
              📞 Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 mb-20 md:mb-24 lg:mb-28 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-blue-300 mb-2">11+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-purple-300 mb-2">5000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-indigo-300 mb-2">50+</div>
              <div className="text-gray-300">Top Brands</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
