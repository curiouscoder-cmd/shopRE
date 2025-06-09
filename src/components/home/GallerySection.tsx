

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/store-interior-1.jpg',
    alt: 'Store Interior - Electronics Section'
  },
  {
    id: 2,
    src: '/images/gallery/store-interior-2.jpg',
    alt: 'Store Interior - Furniture Section'
  },
  {
    id: 3,
    src: '/images/gallery/customer-visit.jpg',
    alt: 'Customer Visit'
  },
  {
    id: 4,
    src: '/images/gallery/new-arrivals.jpg',
    alt: 'New Arrivals'
  },
  {
    id: 5,
    src: '/images/gallery/showroom-display.jpg',
    alt: 'Showroom Display'
  },
  {
    id: 6,
    src: '/images/gallery/store-front-2.jpg',
    alt: 'Store Front'
  }
];

const GallerySection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="text-center text-lg mb-10">Take a virtual tour of our showroom</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative h-64 overflow-hidden rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium text-center px-4">{image.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;