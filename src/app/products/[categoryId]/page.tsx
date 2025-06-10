import { categories } from '@/data/categories';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryHeroImage from '@/components/ui/CategoryHeroImage';

interface PageProps {
  params: {
    categoryId: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const category = categories.find(cat => cat.id === params.categoryId);
  
  if (!category) {
    return {
      title: 'Category Not Found - RISHABH ELECTRONICS',
    };
  }

  return {
    title: `${category.name} - RISHABH ELECTRONICS`,
    description: `Browse our ${category.name.toLowerCase()} collection. ${category.description}`,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = categories.find(cat => cat.id === params.categoryId);

  if (!category) {
    notFound();
  }

  // Mock products for the category
  const mockProducts = [
    {
      id: 1,
      name: `Premium ${category.name} Model 1`,
      features: ['Latest Technology', 'Energy Efficient', 'Warranty Included']
    },
    {
      id: 2,
      name: `Deluxe ${category.name} Model 2`,
      features: ['Premium Quality', 'Advanced Features', '2 Year Warranty']
    },
    {
      id: 3,
      name: `Standard ${category.name} Model 3`,
      features: ['Good Quality', 'Reliable', '1 Year Warranty']
    },
    {
      id: 4,
      name: `Economy ${category.name} Model 4`,
      features: ['Budget Friendly', 'Basic Features', '6 Month Warranty']
    }
  ];

  return (
    <div className="container py-12">
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{category.name}</span>
        </div>
      </nav>

      {/* Category Hero Section */}
      <div className="mb-12">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <CategoryHeroImage
            src={category.image}
            alt={category.name}
            categoryName={category.name}
            categoryType={category.type}
            description={category.description}
          />
        </div>
      </div>

      <div className="mb-8">
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="font-bold text-blue-800 mb-2">Why Choose Our {category.name}?</h2>
          <ul className="text-blue-700 space-y-1">
            <li>• Authorized dealer with genuine products</li>
            <li>• Best prices in town with exclusive deals</li>
            <li>• Professional installation and after-sales service</li>
            <li>• EMI options available</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium">{product.name}</span>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-4">{product.name}</h3>

              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <div className="flex flex-col space-y-2">
                <button className="btn-primary text-sm">
                  Call for Best Price
                </button>
                <button className="btn-secondary text-sm">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">Our experts are here to help you find the perfect {category.name.toLowerCase()} for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="btn-primary">
              Call Us: +91 98765 43210
            </a>
            <Link href="/contact" className="btn-secondary">
              Visit Our Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
