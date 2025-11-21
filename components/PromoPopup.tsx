
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Play, ChevronRight, Volume2, Maximize, MoreHorizontal, Heart, Share2 } from 'lucide-react';
import { PRODUCTS } from '../constants';

const PromoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35); // Mock progress %

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (isDismissed) return null;

  const handleHighlight = (productName: string) => {
    // In a real app, this would seek the video to the timestamp
    console.log(`Seeking video to highlight: ${productName}`);
    // Visual feedback mock
    const videoContainer = document.getElementById('video-container');
    if(videoContainer) {
        videoContainer.classList.add('ring-4', 'ring-nusyn-orange');
        setTimeout(() => videoContainer.classList.remove('ring-4', 'ring-nusyn-orange'), 500);
    }
  };

  return (
    <>
      {/* Fullscreen Overlay for Open State */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8">
          
          {/* Close Button (Outside modal for easy access) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 bg-black/50 rounded-full p-2 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Container */}
          <div className="w-full max-w-7xl h-[85vh] bg-[#121212] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-800 animate-fade-in relative">
            
            {/* LEFT SIDE: Video Player Mock */}
            <div id="video-container" className="relative w-full md:w-7/12 h-1/2 md:h-full bg-black group transition-all duration-300">
              {/* Mock Video Content */}
              <img 
                src="https://picsum.photos/800/1200?tech,workspace" 
                alt="Live Stream" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 flex flex-col justify-between p-6">
                
                {/* Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-nusyn-orange px-3 py-1 rounded-full shadow-lg animate-pulse">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-white text-xs font-bold tracking-wider uppercase">LIVE Sale</span>
                    </div>
                    <div className="hidden sm:block bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                      <span className="text-white text-xs font-medium">1.2k watching</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                     <Share2 className="w-6 h-6 text-white drop-shadow-md cursor-pointer hover:scale-110 transition-transform" />
                     <MoreHorizontal className="w-6 h-6 text-white drop-shadow-md cursor-pointer" />
                  </div>
                </div>

                {/* Center Play Button (Shows on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                </div>

                {/* Bottom Controls */}
                <div className="space-y-3">
                  {/* Host Info */}
                  <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-nusyn-orange overflow-hidden">
                          <img src="https://i.pravatar.cc/150?u=nusyn" alt="Host" />
                      </div>
                      <div>
                          <p className="text-white font-bold text-sm shadow-black drop-shadow-md">Nusyn Tech Daily</p>
                          <p className="text-gray-300 text-xs shadow-black drop-shadow-md">Reviewing the Titan SSD Pro & Nexus Dock</p>
                      </div>
                      <button className="ml-auto bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                          Follow
                      </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer group/bar">
                    <div className="h-full bg-nusyn-orange" style={{ width: `${videoProgress}%` }}></div>
                  </div>
                  
                  {/* Control Row */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                        <Play className="w-5 h-5 fill-white cursor-pointer" />
                        <Volume2 className="w-5 h-5 cursor-pointer" />
                        <span className="text-xs font-medium">04:20 / 12:45</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Heart className="w-5 h-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors" />
                        <Maximize className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Shop List */}
            <div className="w-full md:w-5/12 h-1/2 md:h-full bg-[#1F1F1F] flex flex-col border-l border-gray-800 relative">
                
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-[#1F1F1F] z-10 shadow-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">Shop</span>
                        <span className="bg-gray-700 text-xs text-gray-300 px-2 py-0.5 rounded-full">{PRODUCTS.length} items</span>
                    </div>
                    <ShoppingCart className="w-5 h-5 text-white cursor-pointer hover:text-nusyn-orange transition-colors" />
                </div>

                {/* Product List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar bg-[#121212]">
                {PRODUCTS.map((product, index) => {
                    // Mocking discount logic for visuals
                    const originalPrice = (product.price * 1.3).toFixed(2);
                    const discount = Math.round(((parseFloat(originalPrice) - product.price) / parseFloat(originalPrice)) * 100);

                    return (
                        <div key={product.id} className="flex bg-[#1F1F1F] p-3 rounded-lg gap-3 group hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-gray-700">
                            {/* Image Container */}
                            <div className="relative w-24 h-24 bg-white rounded-md overflow-hidden flex-shrink-0 self-start">
                                <div className="absolute top-1 left-1 bg-black/80 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded shadow-sm z-10">
                                    {index + 1}
                                </div>
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Details */}
                            <div className="flex flex-col flex-1 justify-between py-0.5">
                                <div>
                                    <h4 className="text-white text-sm font-bold leading-tight mb-1 line-clamp-2 hover:text-nusyn-orange cursor-pointer">{product.name}</h4>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-nusyn-orange font-black text-sm">${product.price}</span>
                                        <span className="text-gray-600 text-xs line-through font-medium">${originalPrice}</span>
                                    </div>
                                    <div className="text-[10px] text-green-500 font-bold uppercase tracking-wide">
                                        {discount}% Price Drop
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleHighlight(product.name)}
                                    className="self-start mt-2 bg-[#333] hover:bg-nusyn-orange text-white text-xs font-bold py-1.5 px-4 rounded-full flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/20 group/btn"
                                >
                                    <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
                                    Highlight
                                </button>
                            </div>
                        </div>
                    );
                })}
                </div>
                
                {/* Bottom Sticky Promo */}
                <div className="p-4 bg-[#1A1A1A] border-t border-gray-800">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                         <span>Subtotal estimate</span>
                         <span>$0.00</span>
                    </div>
                    <button className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm">
                        View All Products
                    </button>
                </div>
            </div>

          </div>
        </div>
      )}

      {/* Floating Widget (Mini State) - Bottom Left */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40 animate-bounce-subtle">
            <div className="relative">
                 {/* Close Mini Widget Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsDismissed(true); }}
                    className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-1 shadow-lg z-10 border border-gray-400"
                >
                    <X className="w-3 h-3" />
                </button>

                <div 
                    onClick={() => setIsOpen(true)}
                    className="bg-[#1F1F1F] p-3 rounded-xl shadow-2xl border-2 border-nusyn-orange/50 cursor-pointer hover:scale-105 transition-transform group flex items-center gap-4 pr-6 max-w-xs"
                >
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-black">
                         {/* Mini Video Placeholder */}
                        <img src={PRODUCTS[0].image} alt="Stream" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                             <Play className="w-6 h-6 text-white fill-white opacity-90" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-red-600 text-white text-[9px] font-bold text-center py-0.5 animate-pulse">
                            LIVE
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-nusyn-orange uppercase tracking-wider mb-0.5">Just Started</span>
                        <span className="text-sm font-bold text-white leading-tight group-hover:text-gray-200 transition-colors">
                            Essential Gear Setup
                        </span>
                        <span className="text-[10px] text-gray-400 mt-1">Tap to shop live products</span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-nusyn-orange transition-colors border border-gray-600 group-hover:border-nusyn-orange">
                        <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default PromoPopup;
