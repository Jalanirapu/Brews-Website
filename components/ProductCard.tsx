import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-stone-100 flex flex-col h-full">
      <div className="relative h-48 sm:h-56 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          {product.tags?.map(tag => (
            <span key={tag} className="inline-block bg-white/90 backdrop-blur-sm text-amber-800 text-xs px-2 py-1 rounded-full font-medium ml-1 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">{product.name}</h3>
          <span className="text-amber-700 font-bold whitespace-nowrap ml-2">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-stone-500 text-sm mb-4 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-400 uppercase tracking-wider">{product.unit}</span>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors active:scale-95 transform"
          >
            <Plus size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;