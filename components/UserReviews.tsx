import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const UserReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Trusted by Creators</h2>
          <p className="text-gray-600">Join thousands of professionals who rely on Nusyn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100 fill-gray-100" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-nusyn-orange fill-nusyn-orange' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic leading-relaxed relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-3">
                    {review.user.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.user}</h4>
                  <p className="text-xs text-nusyn-orange font-medium">{review.role}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">Product: {review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;