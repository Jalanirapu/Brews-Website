import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Droplets, Package } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/coffeehero/1920/1080" 
            alt="Coffee pouring" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Brewing Life's Best Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-100 font-light">
            Premium bulk coffee, refreshing gallons of tea, and curated subscriptions delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/drinks" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
              Shop Drinks <ArrowRight size={20} />
            </Link>
            <Link to="/merch" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full font-semibold transition-all">
              View Merchandise
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-800">
              <Coffee size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">Bulk Roasts</h3>
            <p className="text-stone-600">Freshly roasted coffee beans sold by the pound. Perfect for cafes, offices, or serious coffee lovers.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-800">
              <Droplets size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">Gallons to Go</h3>
            <p className="text-stone-600">Hosting an event? Our gallons of Southern Sweet Tea and Fresh Lemonades are ready to serve.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-800">
              <Package size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">Subscriptions</h3>
            <p className="text-stone-600">Never run out again. Sign up for our monthly boxes and save 15% on every order.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;