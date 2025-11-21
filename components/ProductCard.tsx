import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-nusyn-orange transition-all duration-300 flex flex-col hover:shadow-xl">
      {/* Image Area */}
      <div className="relative h-64 overflow-hidden bg-gray-50 p-8">
        {product.featured && (
          <div className="absolute top-4 left-4 z-10 bg-nusyn-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Best Seller
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{product.category}</div>
            <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-nusyn-orange fill-nusyn-orange" />
                <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nusyn-orange transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 italic mb-4 line-clamp-2">{product.tagline}</p>

        {/* Specs Mini Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="text-[10px] text-gray-600 bg-gray-100 px-2 py-1 rounded font-medium text-center truncate">
              {spec}
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-black text-gray-900">${product.price}</div>
          <button 
            onClick={() => onAddToCart(product.id)}
            className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-nusyn-orange transition-colors shadow-lg hover:shadow-orange-500/30"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;