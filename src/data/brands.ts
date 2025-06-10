export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: 'electronics' | 'furniture' | 'both';
}

export const brands: Brand[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.jpg',
    category: 'electronics'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/LG.png',
    category: 'electronics'
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: '/images/brands/sony.jpg',
    category: 'electronics'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.png',
    category: 'electronics'
  },
  {
    id: 'godrej',
    name: 'Godrej',
    logo: '/images/brands/goodrej.png',
    category: 'both'
  },
  {
    id: 'voltas',
    name: 'Voltas',
    logo: '/images/brands/voltas.png',
    category: 'electronics'
  },
  {
    id: 'prestige',
    name: 'Prestige',
    logo: '/images/brands/prestige.jpg',
    category: 'electronics'
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    logo: '/images/brands/bajaj.png',
    category: 'electronics'
  }
];
