
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isVisible, setIsVisible] = useState(false);

  const phrases = [
    'Data Scientist in the making',
    'ML Enthusiast',
    'Building intelligent solutions'
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center px-4">
      <motion.div 
        className="text-center max-w-4xl mx-auto z-10"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <motion.div
          variants={item}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="block mb-2">Hi, I'm</span>
            <span className="neon-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">Burhan K</span>
          </h1>
          
          <motion.h2 
            variants={item}
            className="text-xl md:text-2xl text-gray-300 mt-2"
          >
            Aspiring AI/ML Engineer
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="h-12 md:h-14 flex justify-center items-center mb-12"
          variants={item}
        >
          <span className="text-md md:text-xl text-gray-400">I am a </span>
          <span className="text-md md:text-xl ml-2 font-medium bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center items-center mb-12"
          variants={item}
        >
          <a 
            href="https://github.com/burhank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass p-3 rounded-full hover:neon-border group transition-all"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 group-hover:text-neon-blue transition-all" />
          </a>
          <a 
            href="https://linkedin.com/in/burhank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass p-3 rounded-full hover:neon-border group transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 group-hover:text-neon-blue transition-all" />
          </a>
          <a 
            href="mailto:burhank@email.com" 
            className="glass p-3 rounded-full hover:neon-border group transition-all"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 group-hover:text-neon-blue transition-all" />
          </a>
        </motion.div>
        
        <motion.div variants={item}>
          <a 
            href="#about" 
            className="button-glow inline-block"
            aria-label="Learn more about me"
          >
            <span className="z-10 relative">Explore My Work</span>
          </a>
        </motion.div>
      </motion.div>

      <a 
        href="#about" 
        className="absolute bottom-10 animate-bounce-light"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} className="text-gray-400 hover:text-neon-blue transition-all" />
      </a>

      {/* Background gradient shapes */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
