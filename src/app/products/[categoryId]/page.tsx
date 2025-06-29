import { categories } from '@/data/categories';
import { productsByCategory } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryHeroImage from '@/components/ui/CategoryHeroImage';
import ProductImage from '@/components/ui/ProductImage';

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

  // Get real products for the category
  const categoryProducts = productsByCategory[category.id] || [];

  // Fallback products if no specific products are defined for this category
  const fallbackProducts = [
    {
      id: `${category.id}-1`,
      name: `${category.name}`,
      brand: 'Top Brand',
      features: ['Latest Technology', 'Energy Efficient', 'Warranty Included'],
      specifications: ['High Quality Build', 'Reliable Performance', 'Easy Installation'],
      categoryId: category.id
    },
    {
      id: `${category.id}-2`,
      name: `${category.name}`,
      brand: 'Premium Brand',
      features: ['Advanced Features', 'Smart Technology', '2 Year Warranty'],
      specifications: ['Premium Materials', 'Enhanced Performance', 'Professional Support'],
      categoryId: category.id
    },
    {
      id: `${category.id}-3`,
      name: `${category.name} `,
      brand: 'Quality Brand',
      features: ['Good Quality', 'Reliable', '1 Year Warranty'],
      specifications: ['Durable Construction', 'Standard Features', 'Value for Money'],
      categoryId: category.id
    },
    {
      id: `${category.id}-4`,
      name: `${category.name}`,
      brand: 'Budget Brand',
      features: ['Budget Friendly', 'Basic Features', '6 Month Warranty'],
      specifications: ['Affordable Option', 'Essential Features', 'Good Value'],
      categoryId: category.id
    }
  ];

  const products = categoryProducts.length > 0 ? categoryProducts : fallbackProducts;

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
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            {product.image ? (
              <ProductImage
                src={product.image}
                alt={product.name}
                productName={product.name}
              />
            ) : (
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📦</div>
                  <div className="text-sm font-medium text-gray-600">{product.name}</div>
                </div>
              </div>
            )}

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>

              {product.brand && product.model && (
                <div className="text-sm text-blue-600 font-medium mb-3">
                  {product.brand} • Model: {product.model}
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {product.specifications && (
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Specifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>
              )}

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
            <a href="tel:+919926480250" className="btn-primary">
              Call Us: +91 9926480250
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
