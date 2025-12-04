import React from 'react';
import Navbar from './Navbar';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-4">
                <Coffee size={24} />
                <span className="text-xl font-bold font-serif">Bean & Brew Co.</span>
              </div>
              <p className="text-sm text-stone-400 max-w-sm">
                Dedicated to providing the finest bulk roasts and refreshing beverages for your home or business. Quality in every cup, gallon, and box.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#/drinks" className="hover:text-amber-500">Coffee & Drinks</a></li>
                <li><a href="#/merch" className="hover:text-amber-500">Merchandise</a></li>
                <li><a href="#/about" className="hover:text-amber-500">About Us</a></li>
                <li><a href="#/reviews" className="hover:text-amber-500">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-500"><Instagram size={20} /></a>
                <a href="#" className="hover:text-amber-500"><Facebook size={20} /></a>
                <a href="#" className="hover:text-amber-500"><Twitter size={20} /></a>
              </div>
              <p className="mt-4 text-xs text-stone-500">
                © {new Date().getFullYear()} Bean & Brew Co.<br/>
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;