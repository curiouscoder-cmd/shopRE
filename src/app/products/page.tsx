import { categories } from '@/data/categories';
import Link from 'next/link';

export const metadata = {
  title: 'Products - RISHABH ELECTRONICS',
  description: 'Browse our wide range of electronics and furniture products.',
};

export default function ProductsPage() {
  const electronicsCategories = categories.filter(cat => cat.type === 'electronics');
  const furnitureCategories = categories.filter(cat => cat.type === 'furniture');
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Electronics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronicsCategories.map((category) => (
            <Link 
              href={`/products/${category.id}`} 
              key={category.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">{category.name}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6 text-amber-700 border-b pb-2">Furniture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {furnitureCategories.map((category) => (
            <Link 
              href={`/products/${category.id}`} 
              key={category.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">{category.name}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}