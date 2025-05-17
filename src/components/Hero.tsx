
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Data Scientist in the making',
    'ML Enthusiast',
    'Building intelligent solutions'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleTyping = () => {
    const currentIndex = loopNum % phrases.length;
    const fullText = phrases[currentIndex];

    setText(isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    );

    if (!isDeleting && text === fullText) {
      // Wait before starting to delete
      setTypingSpeed(1500);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      // Move to next phrase
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      // Normal typing speed
      setTypingSpeed(isDeleting ? 50 : 120);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-3xl mx-auto space-y-8 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          <span className="block mb-2 animate-slide-down">Hi, I'm</span>
          <span className="neon-text text-5xl md:text-7xl lg:text-8xl animate-slide-down">Burhan K</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mt-2 animate-slide-up">
          Aspiring AI/ML Engineer
        </h2>
        
        <div className="h-8 md:h-10 flex justify-center items-center">
          <span className="text-md md:text-xl text-gray-400">I am a </span>
          <span className="text-md md:text-xl ml-2 text-neon-blue font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 animate-bounce-light"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} className="text-gray-400 hover:text-neon-blue transition-all" />
      </a>
    </section>
  );
};

export default Hero;
