export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  season: 'winter' | 'summer' | 'spring' | 'all';
}

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  setFilter: (category: string) => void;
  currentFilter: string;
}