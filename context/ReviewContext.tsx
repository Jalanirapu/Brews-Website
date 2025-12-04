import React, { createContext, useContext, useState } from 'react';
import { Review } from '../types';
import { INITIAL_REVIEWS } from '../constants';

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date' | 'approved'>) => void;
  pendingReviews: Review[]; // For admin visibility (simulated)
  approveReview: (id: string) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'approved'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      approved: false, // Default to not approved until "we" decide
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const approveReview = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, approved: true } : r));
  };

  const pendingReviews = reviews.filter(r => !r.approved);
  const publicReviews = reviews.filter(r => r.approved);

  return (
    <ReviewContext.Provider value={{ reviews: publicReviews, addReview, pendingReviews, approveReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) throw new Error('useReviews must be used within a ReviewProvider');
  return context;
};