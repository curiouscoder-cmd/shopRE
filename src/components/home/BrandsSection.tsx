import { brands } from '@/data/brands';

const BrandsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Brands We Deal In</h2>
        <p className="text-center text-lg mb-10">Authorised Dealer of Top Brands You Trust</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-[120px] h-[80px] bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="text-gray-500 text-sm font-medium">{brand.name}</span>
              </div>
              <h3 className="text-sm font-medium text-center">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;