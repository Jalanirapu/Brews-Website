import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

const Drinks: React.FC = () => {
  const renderSection = (title: string, category: Category, description: string) => {
    const items = PRODUCTS.filter(p => p.category === category);
    if (items.length === 0) return null;

    return (
      <section className="py-12 border-b border-stone-200 last:border-0" id={category}>
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">{title}</h2>
          <p className="text-stone-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Beverage Collection</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          From freshly roasted bulk beans to gallons of refreshing tea, we have everything to quench your thirst.
        </p>
        
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {['coffee', 'subscription', 'chocolate', 'lemonade', 'tea'].map((cat) => (
            <a 
              key={cat}
              href={`#${cat}`}
              className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-full text-sm font-medium capitalize transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {renderSection(
        "Bulk Coffee Grounds", 
        "coffee", 
        "Premium beans sourced from around the world, roasted to perfection and sold by the pound."
      )}

      {renderSection(
        "Subscription Boxes", 
        "subscription", 
        "Curated experiences delivered to your doorstep. The best way to explore new flavors."
      )}

      {renderSection(
        "Hot Chocolates", 
        "chocolate", 
        "Rich, creamy cocoa blends sold in bulk for cozy nights or large gatherings."
      )}

      {renderSection(
        "Lemonades (Gallons)", 
        "lemonade", 
        "Freshly squeezed taste, sold by the gallon. Keep refrigerated."
      )}

      {renderSection(
        "Sweet Teas (Gallons)", 
        "tea", 
        "Southern style sweet tea, brewed fresh and sold by the gallon."
      )}
    </div>
  );
};

export default Drinks;