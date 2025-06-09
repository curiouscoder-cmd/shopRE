import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-purple-500/20"></div>

        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/20 rotate-45 float"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full float-delay-1"></div>
        <div className="absolute bottom-1/3 left-1/6 w-20 h-20 border-2 border-purple-400/30 rounded-full float-delay-2"></div>
        <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 rotate-12 float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 border-2 border-blue-400/25 rotate-45 float-delay-1"></div>

        {/* Tech Icons Floating */}
        <div className="absolute top-20 right-1/4 text-4xl text-white/20 float">📱</div>
        <div className="absolute top-1/2 left-20 text-5xl text-white/20 float-delay-1">💻</div>
        <div className="absolute bottom-32 right-20 text-4xl text-white/20 float-delay-2">🏠</div>
        <div className="absolute top-1/3 left-1/3 text-3xl text-white/20 float">⚡</div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
              🏆 Trusted Since 2005
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Best Electronics &</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Furniture Store
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">in Town</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience unbeatable deals, premium quality products, and exceptional service
            that has made us the most trusted name in electronics and furniture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="btn-primary text-center min-w-[200px] group">
              <span className="relative z-10">🛍️ Explore Products</span>
            </Link>
            <Link href="/contact" className="btn-secondary text-center min-w-[200px] group">
              <span className="relative z-10">📞 Contact Us</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">18+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-300">Top Brands</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
