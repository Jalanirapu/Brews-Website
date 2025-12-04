import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Sumatra Mandheling (Bulk)',
    description: 'Earthy, herbal, and spicy. Full body with low acidity. Perfect for dark roast lovers.',
    price: 18.99,
    category: 'coffee',
    image: 'https://picsum.photos/seed/coffee1/400/400',
    unit: 'per lb',
    tags: ['Dark Roast', 'Organic']
  },
  {
    id: 'c2',
    name: 'Ethiopian Yirgacheffe (Bulk)',
    description: 'Floral and citrusy notes with a light body. A breakfast favorite.',
    price: 21.50,
    category: 'coffee',
    image: 'https://picsum.photos/seed/coffee2/400/400',
    unit: 'per lb',
    tags: ['Light Roast', 'Single Origin']
  },
  
  // Subscriptions
  {
    id: 's1',
    name: 'Roaster\'s Choice Box',
    description: 'Monthly delivery of 3 curated single-origin coffees from around the world.',
    price: 45.00,
    category: 'subscription',
    image: 'https://picsum.photos/seed/sub1/400/400',
    unit: 'per month',
    tags: ['Subscription', 'Best Value']
  },
  {
    id: 's2',
    name: 'Cold Brew Kit Subscription',
    description: 'Coarse ground beans specifically for cold brew, delivered bi-weekly.',
    price: 30.00,
    category: 'subscription',
    image: 'https://picsum.photos/seed/sub2/400/400',
    unit: 'bi-weekly',
    tags: ['Subscription', 'Summer Favorite']
  },

  // Hot Chocolate
  {
    id: 'h1',
    name: 'Belgian Dark Chocolate Mix',
    description: 'Rich, creamy, and decadent dark chocolate powder sold in bulk.',
    price: 14.99,
    category: 'chocolate',
    image: 'https://picsum.photos/seed/choc1/400/400',
    unit: 'per lb',
  },
  {
    id: 'h2',
    name: 'Spiced Mexican Cocoa',
    description: 'Cocoa with a kick of cinnamon and cayenne pepper.',
    price: 16.50,
    category: 'chocolate',
    image: 'https://picsum.photos/seed/choc2/400/400',
    unit: 'per lb',
  },

  // Lemonades
  {
    id: 'l1',
    name: 'Classic Lemonade',
    description: 'Freshly squeezed lemons, pure cane sugar, and filtered water.',
    price: 12.00,
    category: 'lemonade',
    image: 'https://picsum.photos/seed/lemon1/400/400',
    unit: 'per gallon',
    tags: ['Refrigerated']
  },
  {
    id: 'l2',
    name: 'Strawberry Basil Lemonade',
    description: 'A sweet and herbaceous twist on the classic summer drink.',
    price: 15.00,
    category: 'lemonade',
    image: 'https://picsum.photos/seed/lemon2/400/400',
    unit: 'per gallon',
    tags: ['Refrigerated']
  },

  // Sweet Teas
  {
    id: 't1',
    name: 'Southern Sweet Tea',
    description: 'Traditional black tea brewed strong and sweetened to perfection.',
    price: 10.00,
    category: 'tea',
    image: 'https://picsum.photos/seed/tea1/400/400',
    unit: 'per gallon',
    tags: ['Refrigerated']
  },
  {
    id: 't2',
    name: 'Peach Tea',
    description: 'Black tea infused with real peach nectar.',
    price: 13.00,
    category: 'tea',
    image: 'https://picsum.photos/seed/tea2/400/400',
    unit: 'per gallon',
    tags: ['Refrigerated']
  },

  // Merchandise
  {
    id: 'm1',
    name: 'Insulated Travel Tumbler',
    description: 'Keeps drinks hot for 12 hours or cold for 24 hours. 20oz.',
    price: 24.99,
    category: 'merch',
    image: 'https://picsum.photos/seed/merch1/400/400',
    unit: 'each',
  },
  {
    id: 'm2',
    name: 'Ceramic Burr Grinder',
    description: 'Hand grinder for the perfect consistency anywhere you go.',
    price: 45.00,
    category: 'merch',
    image: 'https://picsum.photos/seed/merch2/400/400',
    unit: 'each',
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    content: 'The Sumatra bulk coffee is incredible. Freshness you can smell as soon as you open the box.',
    rating: 5,
    date: '2023-10-15',
    approved: true
  },
  {
    id: 'r2',
    author: 'Mike Ross',
    content: 'Ordered 5 gallons of Sweet Tea for our family BBQ. It was a hit!',
    rating: 5,
    date: '2023-11-02',
    approved: true
  },
  {
    id: 'r3',
    author: 'Emily Blunt',
    content: 'The subscription box is a great way to try new beans, but shipping was a day late.',
    rating: 4,
    date: '2023-11-20',
    approved: true
  }
];