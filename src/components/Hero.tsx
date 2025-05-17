
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ChevronRight, Code, Database, Cpu, BrainCog } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  // Motion variants
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

  const techItems = [
    { icon: <Code className="h-6 w-6" />, label: "ML Development", color: "from-blue-400 to-blue-600" },
    { icon: <Database className="h-6 w-6" />, label: "Data Analysis", color: "from-green-400 to-green-600" },
    { icon: <Cpu className="h-6 w-6" />, label: "Deep Learning", color: "from-purple-400 to-purple-600" },
    { icon: <BrainCog className="h-6 w-6" />, label: "AI Solutions", color: "from-red-400 to-red-600" },
  ];

  // Mouse parallax effect calculations
  const calcParallax = (factor = 1) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (mousePosition.x - centerX) / 50 * factor;
    const moveY = (mousePosition.y - centerY) / 50 * factor;
    
    return { x: moveX, y: moveY };
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background elements that respond to mouse movement */}
      <motion.div 
        className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 rounded-full bg-neon-blue/10 filter blur-3xl"
        animate={calcParallax(0.5)}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div 
        className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-3xl"
        animate={calcParallax(0.8)}
        transition={{ type: "spring", damping: 15 }}
      />
      
      <motion.div 
        className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-neon-blue/20 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.1, 1],
          x: calcParallax(2).x,
          y: calcParallax(2).y
        }}
        transition={{ 
          scale: { duration: 0.8, delay: 1.5 },
          x: { type: "spring", damping: 15 },
          y: { type: "spring", damping: 15 }
        }}
      />
      
      <motion.div 
        className="absolute bottom-[25%] left-[15%] w-20 h-20 rounded-full bg-neon-purple/20 backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.1, 1],
          x: calcParallax(1.5).x,
          y: calcParallax(1.5).y
        }}
        transition={{ 
          scale: { duration: 0.8, delay: 1.8 },
          x: { type: "spring", damping: 15 },
          y: { type: "spring", damping: 15 }
        }}
      />

      <motion.div 
        className="text-center md:text-left max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-4"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {/* Left content - Main Text */}
        <motion.div
          variants={item}
          className="md:w-7/12"
        >
          <motion.div 
            className="mb-6"
            variants={item}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span 
                className="block mb-2 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm
              </motion.span>
              
              <motion.div
                className="inline-block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.span 
                  className="neon-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Burhan K
                </motion.span>
                
                {/* Animated circular highlight behind name */}
                <motion.div
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full filter blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  whileHover={{ scale: 1.4, opacity: 0.8 }}
                />
              </motion.div>
            </motion.h1>
            
            <motion.h2 
              variants={item}
              className="text-2xl md:text-3xl text-gray-300 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Aspiring AI/ML Engineer
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="h-14 flex items-center mb-8"
            variants={item}
          >
            <span className="text-xl text-gray-400">I am a </span>
            <span className="text-xl ml-2 font-medium bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-10"
            variants={item}
          >
            <motion.a 
              href="#about" 
              className="button-glow inline-flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="z-10 relative">Explore My Work</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-80"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="relative z-10"
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
                className="glass p-3 rounded-full group transition-all"
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.7)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/burhank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-3 rounded-full group transition-all"
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.7)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
              <motion.a 
                href="mailto:burhank@email.com" 
                className="glass p-3 rounded-full group transition-all"
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.7)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:text-neon-blue transition-all" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Tech cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4"
            variants={{
              hidden: { opacity: 0 },
              show: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {techItems.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <motion.div
                    className="glass p-3 rounded-lg cursor-pointer flex items-center justify-center flex-col"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className={`p-2 rounded-full mb-2 bg-gradient-to-br ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 glass border-none">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-lg font-semibold">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">
                        Specialized expertise in advanced {item.label.toLowerCase()} techniques and methodologies
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right content - Interactive Visual */}
        <motion.div
          variants={item}
          className="hidden md:block md:w-5/12"
        >
          <motion.div 
            className="relative w-full h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Neural network visualization */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting lines */}
                {[...Array(30)].map((_, i) => {
                  const startX = Math.random() * 400;
                  const startY = Math.random() * 400;
                  const endX = Math.random() * 400;
                  const endY = Math.random() * 400;
                  
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="rgba(14, 165, 233, 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 0.4,
                        x: calcParallax(0.05).x,
                        y: calcParallax(0.05).y
                      }}
                      transition={{ 
                        pathLength: { delay: 1 + i * 0.05, duration: 1.5, ease: "easeInOut" },
                        opacity: { delay: 1 + i * 0.05, duration: 1.5 }
                      }}
                    />
                  );
                })}
                
                {/* Nodes */}
                {[...Array(15)].map((_, i) => {
                  const x = 50 + (Math.random() * 300);
                  const y = 50 + (Math.random() * 300);
                  const size = 5 + Math.random() * 8;
                  
                  return (
                    <motion.circle
                      key={`node-${i}`}
                      cx={x}
                      cy={y}
                      r={size}
                      fill="rgba(139, 92, 246, 0.6)"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        x: calcParallax(0.1).x,
                        y: calcParallax(0.1).y,
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        scale: { delay: 1.5 + i * 0.1, duration: 0.5 },
                        opacity: { repeat: Infinity, duration: 2 + i * 0.5, repeatType: "reverse" }
                      }}
                    />
                  );
                })}
              </svg>

              {/* Central Brain Icon */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, type: "spring" }}
              >
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 backdrop-blur flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    boxShadow: ["0 0 10px rgba(14, 165, 233, 0.3)", "0 0 30px rgba(14, 165, 233, 0.5)", "0 0 10px rgba(14, 165, 233, 0.3)"],
                    x: calcParallax(0.2).x,
                    y: calcParallax(0.2).y
                  }}
                  transition={{ 
                    boxShadow: { repeat: Infinity, duration: 3 },
                    x: { type: "spring", damping: 15 },
                    y: { type: "spring", damping: 15 }
                  }}
                >
                  <BrainCog size={60} className="text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a 
        href="#about" 
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 2, duration: 0.8 }
        }}
        whileHover={{ y: 5 }}
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={24} className="text-neon-blue" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
