import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, CreditCard, Lock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Your cart is empty</h2>
        <p className="text-stone-600 mb-8">Looks like you haven't added any delicious brews yet.</p>
        <Link to="/drinks" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <img src={item.image} alt={item.name} className="w-full sm:w-24 h-24 object-cover rounded-md" />
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                  <p className="font-bold text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <p className="text-sm text-stone-500 mb-4">{item.unit}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 bg-stone-100 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded shadow-sm transition-all"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded shadow-sm transition-all"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <button onClick={clearCart} className="text-stone-500 hover:text-stone-700 text-sm underline">
            Clear Cart
          </button>
        </div>

        {/* Order Summary & Payment Guide */}
        <div className="lg:col-span-1">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 sticky top-24">
            <h3 className="text-xl font-bold font-serif mb-6">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping (Est.)</span>
                <span>$12.00</span>
              </div>
              <div className="h-px bg-stone-300 my-4"></div>
              <div className="flex justify-between font-bold text-lg text-stone-900">
                <span>Total</span>
                <span>${(cartTotal + 12).toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => setShowPaymentInfo(true)}
              className="w-full bg-stone-900 text-white py-4 rounded-lg font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 mb-4"
            >
              <CreditCard size={20} />
              Proceed to Checkout
            </button>
            
            <p className="text-xs text-stone-500 text-center flex items-center justify-center gap-1">
              <Lock size={12} /> Secure Checkout (Simulated)
            </p>
          </div>
        </div>
      </div>

      {/* Payment Implementation Guide Modal */}
      {showPaymentInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setShowPaymentInfo(false)}
              className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full"
            >
              ✕
            </button>
            
            <div className="flex items-center gap-3 mb-6 text-amber-600">
              <Info size={32} />
              <h2 className="text-2xl font-bold font-serif text-stone-900">Payment Implementation Guide</h2>
            </div>
            
            <div className="prose prose-stone">
              <p className="lead">To process real transactions on this website, you will need to integrate a Payment Gateway. Here is the standard flow for a React application:</p>
              
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 my-4">
                <h4 className="font-bold text-stone-900 mb-2">1. Choose a Provider</h4>
                <p className="text-sm mb-2"><strong>Stripe</strong> is the industry standard for developer-friendly payments. <strong>PayPal</strong> is also popular.</p>
                
                <h4 className="font-bold text-stone-900 mb-2 mt-4">2. Backend Requirement</h4>
                <p className="text-sm mb-2">You cannot process payments securely on the frontend alone. You need a secure server (Node.js, Python, etc.) or a Serverless Function (e.g., Firebase Functions, AWS Lambda).</p>
                <ul className="list-disc pl-5 text-sm mb-2">
                  <li><strong>Frontend:</strong> Sends order details to your backend.</li>
                  <li><strong>Backend:</strong> Calculates total securely (don't trust frontend prices), calls Stripe API to create a "Payment Intent", and returns a <code>client_secret</code>.</li>
                </ul>

                <h4 className="font-bold text-stone-900 mb-2 mt-4">3. Frontend Integration</h4>
                <p className="text-sm mb-2">Install <code>@stripe/react-stripe-js</code> and <code>@stripe/stripe-js</code>.</p>
                <code className="block bg-black text-white p-3 rounded text-xs overflow-x-auto">
                  {`// Wrap your app in Elements provider
<Elements stripe={stripePromise}>
  <CheckoutForm />
</Elements>`}
                </code>
              </div>

              <h4 className="font-bold text-stone-900">What you need to obtain:</h4>
              <ul className="list-disc pl-5">
                <li>A Merchant Account (Stripe/PayPal Business).</li>
                <li>Public and Secret API Keys.</li>
                <li>SSL Certificate (HTTPS) for your domain (required for payments).</li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end">
              <button 
                onClick={() => {
                  setShowPaymentInfo(false);
                  clearCart();
                  alert("Demo checkout complete!");
                }}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
              >
                Close & Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;