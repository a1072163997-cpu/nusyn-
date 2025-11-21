
import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealText: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on element position in viewport
        // Start filling when top of element is at 90% of viewport height
        // Finish filling when top of element is at 40% of viewport height
        const startY = windowHeight * 0.9;
        const endY = windowHeight * 0.4;
        
        let progress = (startY - rect.top) / (startY - endY);
        // Clamp value between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-transparent bg-clip-text transition-all duration-75 ease-linear"
          style={{
            // Gradient from Orange to Light Gray.
            // The hard stop moves based on scrollProgress.
            backgroundImage: `linear-gradient(90deg, #FF5000 ${scrollProgress}%, #E5E7EB ${scrollProgress + 5}%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          CONNECTED EVERYWHERE,<br />
          <span className="inline-block mt-2">STARTS HERE.</span>
        </h2>
      </div>
    </section>
  );
};

export default ScrollRevealText;
