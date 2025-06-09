import { brands } from '@/data/brands';

export const metadata = {
  title: 'Brands - RISHABH ELECTRONICS',
  description: 'Explore the trusted brands we deal with at RISHABH ELECTRONICS.',
};

export default function BrandsPage() {
  const electronicsBrands = brands.filter(brand => brand.category === 'electronics' || brand.category === 'both');
  const furnitureBrands = brands.filter(brand => brand.category === 'furniture' || brand.category === 'both');
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Brands</h1>
      <p className="text-center text-lg mb-12">Authorized dealer of top brands you trust</p>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Electronics Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {electronicsBrands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-[120px] h-[80px] bg-gray-200 rounded flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm font-medium">{brand.name}</span>
              </div>
              <h3 className="font-medium text-center">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6 text-amber-700 border-b pb-2">Furniture Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {furnitureBrands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-[120px] h-[80px] bg-gray-200 rounded flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm font-medium">{brand.name}</span>
              </div>
              <h3 className="font-medium text-center">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}