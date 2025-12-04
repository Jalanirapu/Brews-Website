import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-amber-600 font-semibold' : 'text-stone-600 hover:text-amber-700';

  const NavLinks = () => (
    <>
      <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/drinks" className={isActive('/drinks')} onClick={() => setIsOpen(false)}>Drinks & Subs</Link>
      <Link to="/merch" className={isActive('/merch')} onClick={() => setIsOpen(false)}>Merchandise</Link>
      <Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About Us</Link>
      <Link to="/reviews" className={isActive('/reviews')} onClick={() => setIsOpen(false)}>Reviews</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-amber-800 p-2 rounded-full text-white">
              <Coffee size={24} />
            </div>
            <span className="text-xl font-bold font-serif text-stone-900 tracking-tight">Bean & Brew Co.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-stone-700 hover:text-amber-700 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-amber-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-stone-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;