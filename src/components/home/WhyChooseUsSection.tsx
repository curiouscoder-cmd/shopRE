import { FaCheckCircle, FaShippingFast, FaTools, FaPercent, FaCreditCard, FaWarehouse } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaWarehouse className="text-4xl text-blue-600" />,
    title: 'Huge Variety Under One Roof',
    description: 'Find everything you need for your home and office in one place.'
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl text-blue-600" />,
    title: 'Latest Products & Trusted Brands',
    description: 'We stock only the latest models from brands you can trust.'
  },
  {
    id: 3,
    icon: <FaTools className="text-4xl text-blue-600" />,
    title: 'After-Sales Service',
    description: 'Our relationship doesn\'t end after purchase. We provide excellent after-sales support.'
  },
  {
    id: 4,
    icon: <FaShippingFast className="text-4xl text-blue-600" />,
    title: 'Fast Delivery & Installation',
    description: 'Quick delivery and professional installation for all products.'
  },
  {
    id: 5,
    icon: <FaPercent className="text-4xl text-blue-600" />,
    title: 'Best Offline Deals',
    description: 'Visit our store to get exclusive deals you won\'t find online.'
  },
  {
    id: 6,
    icon: <FaCreditCard className="text-4xl text-blue-600" />,
    title: 'EMI Options Available',
    description: 'Flexible payment options with EMI available on major credit cards.'
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;