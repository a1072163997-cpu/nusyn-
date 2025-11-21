import React from 'react';
import { ADVANTAGES } from '../constants';

const ExclusiveAdvantages: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Exclusive Advantages</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100 transition-all duration-300 group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-orange-100 rounded-full transform scale-125 group-hover:scale-150 transition-transform opacity-50"></div>
                <div className="relative bg-white p-4 rounded-full shadow-sm">
                    <adv.icon className="w-8 h-8 text-nusyn-orange" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
              <p className="text-sm text-gray-500">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveAdvantages;