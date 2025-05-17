
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = "Burhan K - AI/ML Engineer Portfolio";
  }, []);

  // Page section transitions
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen">
        <ParticlesBackground />
        <Navbar />
        
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={sectionVariants}
          className="relative z-10"
        >
          <motion.section
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.7 } }
            }}
          >
            <Hero />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
            }}
          >
            <About />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
            }}
          >
            <Projects />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
            }}
          >
            <Skills />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
            }}
          >
            <Experience />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } }
            }}
          >
            <Certifications />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } }
            }}
          >
            <Contact />
          </motion.section>
          
          <motion.section
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
            }}
          >
            <Footer />
          </motion.section>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Index;
