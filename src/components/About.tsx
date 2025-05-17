
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Book, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <section id="about" className="section bg-black/20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          About <span className="neon-text">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-64 h-64">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple blur-md opacity-50"
                animate={{ 
                  scale: [1, 1.05, 1], 
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                {/* Placeholder circle with gradient */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-black flex items-center justify-center">
                  <User size={80} className="text-gray-600" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 glass p-8"
          >
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 mb-6 leading-relaxed"
            >
              I'm Burhan K, a passionate AIML undergraduate at RMK College with a deep interest in solving real-world problems using Artificial Intelligence and Machine Learning. I'm constantly learning, building, and exploring new areas in AI – from deep learning to natural language processing.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-300">
                <Book size={18} className="text-neon-blue" />
                <span>B.Tech Artificial Intelligence & Machine Learning</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-neon-blue" />
                <span>Chennai, India</span>
              </motion.div>
              
              <motion.a 
                variants={itemVariants}
                href="mailto:burhank@email.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-neon-blue" />
                <span>burhank@email.com</span>
              </motion.a>
              
              <motion.a 
                variants={itemVariants}
                href="https://github.com/burhank" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                whileHover={{ x: 5 }}
              >
                <Github size={18} className="text-neon-blue" />
                <span>github.com/burhank</span>
              </motion.a>
              
              <motion.a 
                variants={itemVariants}
                href="https://linkedin.com/in/burhank" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                whileHover={{ x: 5 }}
              >
                <Linkedin size={18} className="text-neon-blue" />
                <span>linkedin.com/in/burhank</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
