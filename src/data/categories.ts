export interface Category {
  id: string;
  name: string;
  type: 'electronics' | 'furniture';
  image: string;
  description: string;
}

export const categories: Category[] = [
  // Electronics Categories
  {
    id: 'tvs',
    name: 'Televisions',
    type: 'electronics',
    image: '/images/categories/tvs.jpg',
    description: 'Smart TVs, LED TVs, and OLED TVs from top brands'
  },
  {
    id: 'fridges',
    name: 'Refrigerators',
    type: 'electronics',
    image: '/images/categories/fridges.jpg',
    description: 'Single-door, double-door, and side-by-side refrigerators'
  },
  {
    id: 'acs',
    name: 'Air Conditioners',
    type: 'electronics',
    image: '/images/categories/acs.jpg',
    description: 'Split ACs, Window ACs, and Inverter ACs'
  },
  {
    id: 'mobiles',
    name: 'Mobile Phones',
    type: 'electronics',
    image: '/images/categories/mobiles.jpg',
    description: 'Latest smartphones from all major brands'
  },
  {
    id: 'fans',
    name: 'Fans',
    type: 'electronics',
    image: '/images/categories/fans.jpg',
    description: 'Ceiling fans, table fans, and pedestal fans'
  },
  {
    id: 'lights',
    name: 'Lighting',
    type: 'electronics',
    image: '/images/categories/lights.jpg',
    description: 'LED lights, decorative lights, and smart lighting solutions'
  },
  {
    id: 'inductions',
    name: 'Induction Cooktops',
    type: 'electronics',
    image: '/images/categories/inductions.jpg',
    description: 'Energy-efficient induction cooktops for modern kitchens'
  },
  
  // Furniture Categories
  {
    id: 'almirahs',
    name: 'Almirahs & Wardrobes',
    type: 'furniture',
    image: '/images/categories/almirahs.jpg',
    description: 'Spacious storage solutions for your bedroom and living room'
  },
  {
    id: 'beds',
    name: 'Beds',
    type: 'furniture',
    image: '/images/categories/beds.jpg',
    description: 'Comfortable beds in various designs and sizes'
  },
  {
    id: 'tables',
    name: 'Tables',
    type: 'furniture',
    image: '/images/categories/tables.jpg',
    description: 'Study tables, coffee tables, and dining tables'
  },
  {
    id: 'chairs',
    name: 'Chairs',
    type: 'furniture',
    image: '/images/categories/chairs.jpg',
    description: 'Office chairs, dining chairs, and recliners'
  },
  {
    id: 'dining-sets',
    name: 'Dining Sets',
    type: 'furniture',
    image: '/images/categories/dining-sets.jpg',
    description: 'Complete dining sets for family meals and gatherings'
  },
  {
    id: 'sofa-sets',
    name: 'Sofa Sets',
    type: 'furniture',
    image: '/images/categories/sofa-sets.jpg',
    description: 'Elegant sofa sets to enhance your living room'
  }
];
