import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - Jackery Style */}
      <div className="bg-nusyn-dark text-white text-xs font-bold py-2 text-center tracking-wider">
        FREE SHIPPING ON ORDERS OVER $99 | 5-YEAR WARRANTY INCLUDED
      </div>

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="w-8 h-8 bg-nusyn-orange rounded-md flex items-center justify-center">
                  <span className="text-white font-black text-lg">N</span>
               </div>
              <span className="text-2xl font-black tracking-tighter text-nusyn-dark">
                NU<span className="text-nusyn-orange">SYN</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-bold transition-all uppercase tracking-wide ${
                      link.isSpecial 
                        ? 'text-nusyn-orange hover:text-orange-700' 
                        : 'text-gray-700 hover:text-nusyn-orange hover:bg-gray-50 rounded-md'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-5 h-5 text-gray-600 hover:text-nusyn-orange cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-600 hover:text-nusyn-orange cursor-pointer transition-colors" />
              <div className="relative cursor-pointer group">
                <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-nusyn-orange transition-colors" />
                <span className="absolute -top-2 -right-2 bg-nusyn-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-nusyn-orange">
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-xl h-screen z-50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-4 rounded-md text-lg font-bold uppercase border-b border-gray-100 last:border-0 ${
                     link.isSpecial ? 'text-nusyn-orange' : 'text-gray-800 hover:text-nusyn-orange'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;