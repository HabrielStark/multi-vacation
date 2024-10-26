import { create } from 'zustand';
import { Product, ProductsState } from '../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Ski Set',
    description: 'Complete ski set for advanced skiers',
    price: 899.99,
    image: '/images/ski-set.jpg',
    category: 'Skiing',
    season: 'winter'
  },
  {
    id: '2',
    name: 'Snowboard Pro',
    description: 'Professional grade snowboard for all terrains',
    price: 549.99,
    image: '/images/snowboard.jpg',
    category: 'Snowboarding',
    season: 'winter'
  },
  {
    id: '3',
    name: 'Premium Surfboard',
    description: 'High-performance surfboard for experienced surfers',
    price: 699.99,
    image: '/images/surfboard.jpg',
    category: 'Surfing',
    season: 'summer'
  },
  {
    id: '4',
    name: 'Kayak Explorer',
    description: 'Stable and durable kayak for adventures',
    price: 799.99,
    image: '/images/kayak.jpg',
    category: 'Kayaking',
    season: 'summer'
  },
  {
    id: '5',
    name: 'Hiking Boots Pro',
    description: 'Waterproof hiking boots for challenging trails',
    price: 199.99,
    image: '/images/hiking-boots.jpg',
    category: 'Hiking',
    season: 'spring'
  },
  {
    id: '6',
    name: 'Mountain Bike Elite',
    description: 'Professional mountain bike for all terrains',
    price: 1299.99,
    image: '/images/mountain-bike.jpg',
    category: 'Biking',
    season: 'spring'
  }
];

export const useProductStore = create<ProductsState>((set) => ({
  products,
  filteredProducts: products,
  currentFilter: 'all',
  setFilter: (category: string) => 
    set((state) => ({
      currentFilter: category,
      filteredProducts: category === 'all' 
        ? state.products 
        : state.products.filter(product => product.category === category)
    }))
}));