import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Placeholder for image - you'll need to add actual images to your public folder */}
          <div className="absolute inset-0 bg-blue-900"></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Best Electronics & Furniture Store in Town – Since 2005
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Visit our shop for unbeatable deals and top-notch service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary text-center">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
