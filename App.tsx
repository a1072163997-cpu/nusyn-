
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AiAssistant from './components/AiAssistant';
import EndorsementCarousel from './components/EndorsementCarousel';
import ExclusiveAdvantages from './components/ExclusiveAdvantages';
import BlogSection from './components/BlogSection';
import UserReviews from './components/UserReviews';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import PromoPopup from './components/PromoPopup';
import FloatingSupport from './components/FloatingSupport';
import ScenarioCategories from './components/ScenarioCategories';
import ScrollRevealText from './components/ScrollRevealText';
import { PRODUCTS } from './constants';
import { Category } from './types';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (id: string) => {
    alert(`Added product ${id} to cart! (Demo)`);
  };

  const handleViewProduct = (id: string) => {
     const element = document.getElementById('products');
     if (element) {
         setActiveCategory('All');
         element.scrollIntoView({ behavior: 'smooth' });
     }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-nusyn-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Endorsement / Awards Carousel */}
        <EndorsementCarousel />

        {/* Product Catalog */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-2">The Collection</h2>
                <p className="text-gray-500">Engineered for the extreme.</p>
              </div>
              
              {/* Filter Tabs */}
              <div className="mt-6 md:mt-0 flex space-x-2 bg-gray-100 p-1 rounded-lg border border-gray-200">
                {['All', Category.STORAGE, Category.DOCK].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                      activeCategory === cat 
                      ? 'bg-white text-nusyn-orange shadow-md' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Scenario Categories (Visual Grid) */}
        <ScenarioCategories />

        {/* Scroll Reveal Text */}
        <ScrollRevealText />

        {/* Exclusive Advantages (Grid of Icons) */}
        <ExclusiveAdvantages />
        
        {/* Blog Section (Added before Trusted by Creators) */}
        <BlogSection />

        {/* User Reviews (Trusted by Creators) */}
        <UserReviews />

        {/* AI Assistant Section */}
        <AiAssistant onViewProduct={handleViewProduct} />

        {/* Newsletter Subscription */}
        <NewsletterSubscribe />

      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="text-2xl font-black tracking-tighter text-white mb-6 block">
                NU<span className="text-nusyn-orange">SYN</span>
              </span>
              <p className="text-gray-400 text-sm mb-6">
                Redefining portable durability. Built for creators, explorers, and professionals who demand the best.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-nusyn-orange cursor-pointer">Portable SSDs</li>
                <li className="hover:text-nusyn-orange cursor-pointer">Thunderbolt Docks</li>
                <li className="hover:text-nusyn-orange cursor-pointer">USB-C Hubs</li>
                <li className="hover:text-nusyn-orange cursor-pointer">Cables & Adapters</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-nusyn-orange cursor-pointer">Warranty</li>
                <li className="hover:text-nusyn-orange cursor-pointer">Downloads</li>
                <li className="hover:text-nusyn-orange cursor-pointer">Contact Us</li>
                <li className="hover:text-nusyn-orange cursor-pointer">Shipping Policy</li>
              </ul>
            </div>

             <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <p className="text-gray-500 text-xs mb-2">support@nusyn.com</p>
              <p className="text-gray-500 text-xs">+1 (800) 123-4567</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Nusyn Technology. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-600">
              <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Interactive Popup (Left) */}
      <PromoPopup />

      {/* Floating Support (Right) */}
      <FloatingSupport />

    </div>
  );
};

export default App;
