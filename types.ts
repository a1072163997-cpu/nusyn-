export enum Category {
  STORAGE = 'Mobile Storage',
  DOCK = 'PC Docks',
  ACCESSORY = 'Accessories'
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: Category;
  image: string;
  specs: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isProductRecommendation?: boolean;
  recommendedProductId?: string;
}