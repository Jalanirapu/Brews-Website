import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Merchandise from './pages/Merchandise';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { ReviewProvider } from './context/ReviewContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <ReviewProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/merch" element={<Merchandise />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </HashRouter>
      </ReviewProvider>
    </CartProvider>
  );
};

export default App;