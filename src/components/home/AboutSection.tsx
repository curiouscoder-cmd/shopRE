

const AboutSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {/* Placeholder for image - you'll need to add actual images to your public folder */}
            <div className="bg-gray-300 rounded-lg h-[300px] w-full"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="mb-4">
              Since 2005, RISHABH ELECTRONICS has been the trusted name for quality electronics and furniture in the region. 
              What started as a small shop has now grown into a premier destination for all your home and office needs.
            </p>
            <p className="mb-4">
              Our commitment to quality, customer satisfaction, and after-sales service has earned us the reputation of being 
              the most reliable electronics and furniture store in town.
            </p>
            <p className="mb-4">
              We take pride in offering a wide range of products from trusted brands, ensuring that our customers get nothing but the best.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-bold text-3xl text-blue-600">18+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-bold text-3xl text-blue-600">1000+</h4>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;