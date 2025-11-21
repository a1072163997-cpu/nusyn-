import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Globe, BatteryCharging } from 'lucide-react';

const PHRASES = [
  "MOBILE STORAGE",
  "PC DOCKING",
  "DIGITAL NOMADS",
  "CREATIVE PROS",
  "EXTREME CONDITIONS"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % PHRASES.length;
      const fullText = PHRASES[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Dynamic Pacing for Natural Feel
      let speed = 100 - Math.random() * 50; 
      if (isDeleting) speed = 50; 

      if (!isDeleting && text === fullText) {
        speed = 2500; 
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500; 
      }

      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative bg-nusyn-dark min-h-[85vh] flex items-center overflow-hidden text-white">
      
      {/* Dark textured background */}
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-100">
        {/* Subtle grid pattern (Anker-tech feel) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left space-y-8 py-12 md:py-24">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded px-4 py-1.5 backdrop-blur-sm">
             <span className="w-2 h-2 bg-nusyn-orange rounded-full animate-pulse"></span>
            <span className="text-nusyn-orange text-xs font-bold uppercase tracking-widest">Gen 3 Series Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight min-h-[240px] sm:min-h-[180px] md:min-h-auto">
            POWER YOUR <br />
            <span className="text-nusyn-orange">{text}</span>
            <span className="cursor-blink inline-block w-[3px] h-10 md:h-14 bg-white ml-2 align-middle -translate-y-1 md:-translate-y-2"></span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Rugged durability meets cutting-edge speed. Designed for creators who push boundaries.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#products" className="flex items-center justify-center px-8 py-4 bg-nusyn-orange text-white font-bold rounded hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 transform hover:-translate-y-1 uppercase tracking-wide">
              Shop Products <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#ai-help" className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold rounded hover:border-white hover:bg-white/5 transition-all uppercase tracking-wide">
              Talk to AI Sales
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 flex space-x-8 border-t border-gray-800">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">IP67</span>
              <span className="text-xs text-gray-500 uppercase font-bold">Waterproof</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">5YR</span>
              <span className="text-xs text-gray-500 uppercase font-bold">Warranty</span>
            </div>
             <div className="flex flex-col">
              <span className="text-2xl font-black text-white">24/7</span>
              <span className="text-xs text-gray-500 uppercase font-bold">Support</span>
            </div>
          </div>
        </div>

        {/* Hero Image Composition */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end">
           <div className="relative z-10 w-full max-w-lg">
             {/* Orange Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-nusyn-orange/30 to-transparent rounded-full blur-3xl transform translate-y-10"></div>
             
             <img 
                src="https://picsum.photos/800/800?tech,rugged" 
                alt="Nusyn Gear" 
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl border border-gray-700 grayscale-[0.2] hover:grayscale-0 transition-all duration-500" 
             />
             
             {/* Floating Tech Spec Badge */}
             <div className="absolute -bottom-6 -left-6 bg-[#222] p-6 rounded shadow-2xl border-l-4 border-nusyn-orange z-20 animate-bounce-slow hidden md:block">
                <div className="flex items-center space-x-4">
                    <BatteryCharging className="w-8 h-8 text-nusyn-orange" />
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Passthrough</p>
                        <p className="text-xl font-black text-white">100W PD</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;