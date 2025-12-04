import React, { useState } from 'react';
import { useReviews } from '../context/ReviewContext';
import { Star, MessageSquare } from 'lucide-react';

const Reviews: React.FC = () => {
  const { reviews, addReview, pendingReviews, approveReview } = useReviews();
  const [formData, setFormData] = useState({ author: '', content: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false); // Toggle for demo purposes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview(formData);
    setSubmitted(true);
    setFormData({ author: '', content: '', rating: 5 });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Customer Reviews</h1>
        <p className="text-stone-600">See what our community is saying about our brews.</p>
        
        {/* Hidden Admin Toggle for Demo */}
        <button 
          onClick={() => setShowAdmin(!showAdmin)}
          className="mt-4 text-xs text-stone-300 hover:text-stone-500"
        >
          (Toggle Admin View for Demo)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Review Form */}
        <div className="md:col-span-1">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 sticky top-24">
            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-amber-600" />
              Write a Review
            </h3>
            
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg text-sm">
                Thank you! Your review has been sent to our team for moderation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Rating</label>
                  <select 
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.rating}
                    onChange={e => setFormData({...formData, rating: Number(e.target.value)})}
                  >
                    {[5,4,3,2,1].map(r => (
                      <option key={r} value={r}>{r} Stars</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Review</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-stone-900 text-white py-2 rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:col-span-2 space-y-6">
          {/* Admin Pending Section (Demo Only) */}
          {showAdmin && pendingReviews.length > 0 && (
            <div className="mb-8 border-2 border-dashed border-amber-300 bg-amber-50 p-4 rounded-xl">
              <h3 className="font-bold text-amber-800 mb-4">Pending Approval (Admin Only)</h3>
              {pendingReviews.map(review => (
                <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{review.author}</p>
                      <p className="text-stone-600 text-sm mt-1">{review.content}</p>
                    </div>
                    <button 
                      onClick={() => approveReview(review.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {reviews.length === 0 ? (
            <p className="text-center text-stone-500 py-12">No reviews yet. Be the first!</p>
          ) : (
            reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-bold text-stone-900 block">{review.author}</span>
                    <span className="text-xs text-stone-400">{review.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
                <p className="text-stone-700 leading-relaxed">"{review.content}"</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;