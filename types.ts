export type Category = 'coffee' | 'subscription' | 'chocolate' | 'lemonade' | 'tea' | 'merch';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  unit: string; // e.g., "per lb", "per gallon", "per box"
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  approved: boolean;
}