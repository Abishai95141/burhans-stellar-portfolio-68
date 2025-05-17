
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

const Index = () => {
  useEffect(() => {
    document.title = "Burhan K - AI/ML Engineer Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
