import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

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
      let speed = 100 - Math.random() * 50; // Randomize slightly for human feel
      if (isDeleting) speed = 50; // Faster deleting

      if (!isDeleting && text === fullText) {
        // Finished typing phrase
        speed = 2500; // Longer pause to read
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Finished deleting phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500; // Pause before starting next
      }

      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative bg-white pt-24 lg:pt-0 min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-20 hidden lg:block z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-left space-y-8 py-12 md:py-24">
          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1">
             <span className="w-2 h-2 bg-nusyn-orange rounded-full animate-pulse"></span>
            <span className="text-nusyn-orange text-xs font-bold uppercase tracking-widest">New Release 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight min-h-[240px] sm:min-h-[180px] md:min-h-auto">
            ENGINEERED FOR <br />
            <span className="animate-gradient-text">{text}</span>
            <span className="cursor-blink inline-block w-[3px] h-10 md:h-14 bg-gray-900 ml-2 align-middle -translate-y-1 md:-translate-y-2"></span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            The next generation of rugged storage and connectivity. 
            Powering your workflow wherever the journey takes you.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#products" className="flex items-center justify-center px-8 py-4 bg-nusyn-orange text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#ai-help" className="flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:border-gray-900 transition-all">
              Ask AI Assistant
            </a>
          </div>

          <div className="pt-8 flex space-x-8 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-nusyn-orange" />
              <span className="text-sm font-bold">IP67 Rated</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="w-5 h-5 text-nusyn-orange" />
              <span className="text-sm font-bold">Titanium Shell</span>
            </div>
             <div className="flex items-center space-x-2 text-gray-600">
              <Globe className="w-5 h-5 text-nusyn-orange" />
              <span className="text-sm font-bold">Eco-Packaging</span>
            </div>
          </div>
        </div>

        {/* Hero Image Composition */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end">
           <div className="relative z-10 w-full max-w-lg">
             <div className="absolute inset-0 bg-gradient-to-tr from-nusyn-orange/20 to-transparent rounded-full blur-3xl transform translate-y-10"></div>
             <img 
                src="https://picsum.photos/800/800?gadgets" 
                alt="Nusyn Gear" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white" 
             />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-20 animate-bounce-slow hidden md:block">
                <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Transfer Speed</p>
                        <p className="text-xl font-black text-gray-900">2800 MB/s</p>
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