export const metadata = {
  title: 'Gallery - RISHABH ELECTRONICS',
  description: 'Take a virtual tour of our showroom and see our wide range of products.',
};

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/store-interior-1.jpg',
    alt: 'Store Interior - Electronics Section',
    category: 'Store'
  },
  {
    id: 2,
    src: '/images/gallery/store-interior-2.jpg',
    alt: 'Store Interior - Furniture Section',
    category: 'Store'
  },
  {
    id: 3,
    src: '/images/gallery/customer-visit.jpg',
    alt: 'Customer Visit',
    category: 'Customers'
  },
  {
    id: 4,
    src: '/images/gallery/new-arrivals.jpg',
    alt: 'New Arrivals',
    category: 'Products'
  },
  {
    id: 5,
    src: '/images/gallery/showroom-display.jpg',
    alt: 'Showroom Display',
    category: 'Store'
  },
  {
    id: 6,
    src: '/images/gallery/store-front-2.jpg',
    alt: 'Store Front',
    category: 'Store'
  },
  {
    id: 7,
    src: '/images/gallery/electronics-section.jpg',
    alt: 'Electronics Section',
    category: 'Products'
  },
  {
    id: 8,
    src: '/images/gallery/furniture-section.jpg',
    alt: 'Furniture Section',
    category: 'Products'
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our showroom and discover our wide range of premium products and elegant displays
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border border-white/50">
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex items-center justify-center group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-indigo-200 transition-all duration-300">
                  {/* Category Icon */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm border border-white/50">
                    {image.category === 'Store' && '🏪'}
                    {image.category === 'Products' && '📦'}
                    {image.category === 'Customers' && '👥'}
                    <span className="ml-1 text-gray-700">{image.category}</span>
                  </div>

                  {/* Main Content */}
                  <div className="text-center p-4">
                    <div className="text-4xl mb-3">
                      {image.category === 'Store' && '🏪'}
                      {image.category === 'Products' && '📦'}
                      {image.category === 'Customers' && '👥'}
                    </div>
                    <span className="text-gray-600 font-medium text-center block leading-relaxed">
                      {image.alt}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    👁️
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.alt}</h3>
                  <p className="text-gray-300 text-xs">{image.category} Gallery</p>
                </div>

                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Filter (Visual Enhancement) */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
              <span>🏪</span>
              <span className="text-sm font-medium text-gray-700">Store Views</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              <span>📦</span>
              <span className="text-sm font-medium text-gray-700">Products</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl">
              <span>👥</span>
              <span className="text-sm font-medium text-gray-700">Customers</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">📍</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Visit Our Store
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Experience our products in person at our beautiful showroom. See the quality and craftsmanship up close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                🗺️ Get Directions
              </a>
              <a href="tel:+919926480250" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
