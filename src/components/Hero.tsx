
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

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

  // Motion variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Motion variants for floating animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center px-4">
      <motion.div 
        className="text-center md:text-left max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {/* Left content - Main Text */}
        <motion.div
          variants={item}
          className="mb-12 md:mb-0 md:w-7/12"
        >
          <motion.div 
            className="mb-6"
            variants={item}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >Hi, I'm</motion.span>
              <motion.span 
                className="neon-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >Burhan K</motion.span>
            </h1>
            
            <motion.h2 
              variants={item}
              className="text-xl md:text-2xl text-gray-300 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Aspiring AI/ML Engineer
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="h-12 md:h-14 flex items-center mb-8"
            variants={item}
          >
            <span className="text-md md:text-xl text-gray-400">I am a </span>
            <span className="text-md md:text-xl ml-2 font-medium bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
            variants={item}
          >
            <motion.a 
              href="#about" 
              className="button-glow inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="z-10 relative">Explore My Work</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight size={18} />
              </motion.span>
            </motion.a>
            
            <motion.div 
              className="flex gap-3 mt-6 sm:mt-0 sm:ml-4"
              variants={item}
            >
              <motion.a 
                href="https://github.com/burhank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:neon-border group transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/burhank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:neon-border group transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
              <motion.a 
                href="mailto:burhank@email.com" 
                className="glass p-3 rounded-full hover:neon-border group transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right content - Graphic Element */}
        <motion.div
          variants={item}
          className="hidden md:block md:w-5/12"
          animate={floatingAnimation}
        >
          <div className="relative">
            {/* Abstract code/AI visualization */}
            <motion.div 
              className="w-64 h-64 mx-auto rounded-full relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Central circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-white/10"></div>
              
              {/* Orbiting elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 rounded-full bg-white/5 border border-neon-blue/30 flex items-center justify-center"
                  style={{
                    top: `${20 + Math.sin(i * 72 * Math.PI / 180) * 100}%`,
                    left: `${20 + Math.cos(i * 72 * Math.PI / 180) * 100}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                </motion.div>
              ))}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="80"
                  stroke="rgba(14, 165, 233, 0.2)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="120"
                  stroke="rgba(139, 92, 246, 0.15)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="10,10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </svg>
              
              {/* AI/ML labels */}
              {["AI", "ML", "DL", "CV", "NLP"].map((text, i) => (
                <motion.div
                  key={text}
                  className="absolute text-xs font-mono text-neon-blue/70"
                  style={{
                    top: `${10 + Math.sin(i * 72 * Math.PI / 180) * 140}%`,
                    left: `${10 + Math.cos(i * 72 * Math.PI / 180) * 140}%`,
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.5
                  }}
                >
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a 
        href="#about" 
        className="absolute bottom-10 animate-bounce-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} className="text-gray-400 hover:text-neon-blue transition-all" />
      </motion.a>

      {/* Background gradient shapes */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
