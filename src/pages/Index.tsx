
import React, { useEffect, useState } from 'react';
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
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Burhan K - AI/ML Engineer Portfolio";
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if(scrollY >= (sectionTop - 300) && scrollY < (sectionTop + sectionHeight - 300)) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <Navbar activeSection={activeSection} />
        
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple z-50"
          style={{ scaleX, transformOrigin: "0%" }}
        />
        
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={sectionVariants}
          className="relative z-10"
        >
          <motion.section
            id="home"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.7 } }
            }}
          >
            <Hero />
          </motion.section>
          
          <motion.section
            id="about"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.1,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <About />
          </motion.section>
          
          <motion.section
            id="projects"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.2,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <Projects />
          </motion.section>
          
          <motion.section
            id="skills"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.3,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <Skills />
          </motion.section>
          
          <motion.section
            id="experience"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.4,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <Experience />
          </motion.section>
          
          <motion.section
            id="certifications"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.5,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <Certifications />
          </motion.section>
          
          <motion.section
            id="contact"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.6,
                  when: "beforeChildren",
                  staggerChildren: 0.2
                } 
              }
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
