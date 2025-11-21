import React from 'react';
import { ChevronRight } from 'lucide-react';

const SCENARIOS = [
  {
    id: 1,
    title: "Outdoor Exploration",
    image: "https://picsum.photos/1200/800?random=101",
    colSpan: "md:col-span-3", // Top row: Half width (3/6 columns)
    height: "h-80 md:h-96"
  },
  {
    id: 2,
    title: "Home Backup",
    image: "https://picsum.photos/1200/800?random=102",
    colSpan: "md:col-span-3", // Top row: Half width
    height: "h-80 md:h-96"
  },
  {
    id: 3,
    title: "RVing & Road Trips",
    image: "https://picsum.photos/800/600?random=103",
    colSpan: "md:col-span-2", // Bottom row: Third width (2/6 columns)
    height: "h-64 md:h-80"
  },
  {
    id: 4,
    title: "Solar Generator",
    image: "https://picsum.photos/800/600?random=104",
    colSpan: "md:col-span-2",
    height: "h-64 md:h-80"
  },
  {
    id: 5,
    title: "On-the-Water Power",
    image: "https://picsum.photos/800/600?random=105",
    colSpan: "md:col-span-2",
    height: "h-64 md:h-80"
  }
];

const ScenarioCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {SCENARIOS.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer ${item.colSpan} ${item.height}`}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                />
              </div>

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="h-1 w-0 bg-nusyn-orange group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>

                {/* Arrow Icon */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-nusyn-orange group-hover:border-nusyn-orange transition-all duration-300 transform group-hover:translate-x-2">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* 3D Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent skew-x-12 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScenarioCategories;