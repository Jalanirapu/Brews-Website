import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Merchandise: React.FC = () => {
  const merchItems = PRODUCTS.filter(p => p.category === 'merch');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Equipment & Gear</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Elevate your brewing experience with our high-quality tumblers and grinders.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {merchItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Merchandise;