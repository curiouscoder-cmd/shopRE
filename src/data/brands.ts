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
    logo: '/images/brands/samsung.png',
    category: 'electronics'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.png',
    category: 'electronics'
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: '/images/brands/sony.png',
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
    logo: '/images/brands/godrej.png',
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
    logo: '/images/brands/prestige.png',
    category: 'electronics'
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    logo: '/images/brands/bajaj.png',
    category: 'electronics'
  },
  {
    id: 'nilkamal',
    name: 'Nilkamal',
    logo: '/images/brands/nilkamal.png',
    category: 'furniture'
  },
  {
    id: 'durian',
    name: 'Durian',
    logo: '/images/brands/durian.png',
    category: 'furniture'
  }
];
