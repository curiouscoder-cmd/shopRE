import Link from 'next/link';
import { categories } from '@/data/categories';
import CategoryImage from '@/components/ui/CategoryImage';

const ProductCategoriesSection = () => {
  const electronicsCategories = categories.filter(cat => cat.type === 'electronics');
  const furnitureCategories = categories.filter(cat => cat.type === 'furniture');

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Product Categories</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">Electronics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {electronicsCategories.map((category) => (
              <Link 
                href={`/products/${category.id}`} 
                key={category.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-300 overflow-hidden">
                  <CategoryImage
                    src={category.image}
                    alt={category.name}
                    categoryName={category.name}
                    categoryType={category.type}
                    fallbackClassName="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-purple-100"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{category.name}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-amber-700">Furniture</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {furnitureCategories.map((category) => (
              <Link 
                href={`/products/${category.id}`} 
                key={category.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-300 overflow-hidden">
                  <CategoryImage
                    src={category.image}
                    alt={category.name}
                    categoryName={category.name}
                    categoryType={category.type}
                    fallbackClassName="flex items-center justify-center h-full bg-gradient-to-br from-amber-100 to-orange-100"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{category.name}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;