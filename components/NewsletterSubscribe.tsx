import React from 'react';
import { Mail, Smartphone } from 'lucide-react';

const NewsletterSubscribe: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#262626] rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Subscribe Here
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Be the first to receive our latest news and exclusive deals! Subscribe now.
            </p>
          </div>

          {/* Form Content */}
          <div className="lg:w-1/2 w-full space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-red-500 font-bold text-xl">*</span>
              </div>
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="w-full pl-8 pr-4 py-4 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-nusyn-orange placeholder-gray-400"
              />
            </div>

            <div className="flex relative">
               <div className="bg-white flex items-center px-3 rounded-l border-r border-gray-200">
                   <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-6 h-auto" />
                   <span className="text-gray-900 font-medium ml-2 text-sm">US +1</span>
               </div>
               <input 
                type="tel" 
                placeholder="Enter Your Mobile Phone Number" 
                className="w-full px-4 py-4 rounded-r bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-nusyn-orange placeholder-gray-400"
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-nusyn-orange bg-gray-700 border-gray-600 rounded" />
              <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer select-none">
                I agree to Nusyn's <span className="underline hover:text-white">Terms of Service</span> and <span className="underline hover:text-white">Privacy Policy</span>
              </label>
            </div>

            <button className="w-full bg-nusyn-orange hover:bg-orange-600 text-white font-bold py-4 rounded transition-all duration-300 shadow-lg hover:shadow-orange-600/20 mt-4">
              Subscribe Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;