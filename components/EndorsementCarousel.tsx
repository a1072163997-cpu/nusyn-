import React from 'react';
import { Award } from 'lucide-react';
import { ENDORSEMENTS } from '../constants';

const EndorsementCarousel: React.FC = () => {
  return (
    <section id="endorsements" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img src="https://picsum.photos/1920/600?mountain" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Awards & Recognition</h2>
          <p className="text-gray-300 max-w-xl">
            Nusyn's efforts on R&D and durability are globally recognized by top tech authorities.
          </p>
          <button className="mt-6 px-6 py-2 bg-nusyn-orange text-white font-bold rounded-full hover:bg-orange-600 transition-colors">
            View More
          </button>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-8 scrollbar-hide">
          {ENDORSEMENTS.map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[350px] bg-white text-black p-8 rounded-xl shadow-lg flex flex-col justify-between hover:transform hover:-translate-y-1 transition-all duration-300">
              <div>
                <h3 className="text-xl font-black text-nusyn-orange mb-4 uppercase tracking-wider leading-none">
                   "{item.quote}"
                </h3>
              </div>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">{item.source}</p>
                <div className="flex items-center space-x-2 text-gray-500">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-bold uppercase">{item.award}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Placeholder Award Badge */}
          <div className="min-w-[250px] bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
             <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-nusyn-orange" />
             </div>
             <h3 className="font-black text-gray-900 text-lg">SEAL SUSTAINABLE</h3>
             <p className="text-sm text-gray-500 mt-2">Product Award 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementCarousel;