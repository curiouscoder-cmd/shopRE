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
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gallery</h1>
      <p className="text-center text-lg mb-12">Take a virtual tour of our showroom and see our wide range of products</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium text-center px-4">{image.alt}</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-medium">{image.alt}</h3>
              <p className="text-gray-300 text-sm">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Visit Our Store</h2>
        <p className="text-lg mb-6">Experience our products in person at our showroom</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-primary">
            Get Directions
          </a>
          <a href="tel:+919876543210" className="btn-secondary">
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
