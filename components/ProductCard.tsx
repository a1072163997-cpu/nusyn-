import React from 'react';
import { Star, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white overflow-hidden border border-gray-200 hover:border-nusyn-orange transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-orange-100 rounded-lg">
      
      {/* Featured Badge (Jackery style: Bold Orange) */}
      {product.featured && (
        <div className="absolute top-0 left-0 z-20 bg-nusyn-orange text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-br-lg">
          Best Seller
        </div>
      )}

      {/* Image Area */}
      <div className="relative h-64 overflow-hidden bg-gray-100 p-8 group-hover:bg-white transition-colors">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover Quick Specs Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span>Rugged</span> • <span>Fast</span> • <span>Reliable</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start mb-2">
            <div className="text-[10px] text-nusyn-orange font-black uppercase tracking-wider mb-1 border border-nusyn-orange/20 px-2 py-0.5 rounded">
                {product.category}
            </div>
            <div className="flex items-center space-x-1">
                <Star className="w-3.5 h-3.5 text-nusyn-orange fill-nusyn-orange" />
                <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                <span className="text-[10px] text-gray-400">({product.reviews})</span>
            </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nusyn-orange transition-colors font-sans">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.tagline}</p>

        {/* Specs List - Vertical for technical feel */}
        <ul className="mb-6 space-y-1">
          {product.specs.slice(0, 3).map((spec, idx) => (
            <li key={idx} className="flex items-center text-xs text-gray-600 font-medium">
              <ShieldCheck className="w-3 h-3 text-gray-400 mr-2" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-black text-gray-900 tracking-tight">${product.price}</div>
          <button 
            onClick={() => onAddToCart(product.id)}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded hover:bg-nusyn-orange transition-colors shadow-lg flex items-center gap-2"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;