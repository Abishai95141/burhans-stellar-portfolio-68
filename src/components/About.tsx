
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Book, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          About <span className="neon-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple blur-md opacity-50"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                {/* Placeholder circle with gradient */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-black flex items-center justify-center">
                  <User size={80} className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-2 glass p-8 animate-fade-in">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Burhan K, a passionate AIML undergraduate at RMK College with a deep interest in solving real-world problems using Artificial Intelligence and Machine Learning. I'm constantly learning, building, and exploring new areas in AI – from deep learning to natural language processing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Book size={18} className="text-neon-blue" />
                <span>B.Tech Artificial Intelligence & Machine Learning</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-neon-blue" />
                <span>Chennai, India</span>
              </div>
              
              <a 
                href="mailto:burhank@email.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <Mail size={18} className="text-neon-blue" />
                <span>burhank@email.com</span>
              </a>
              
              <a 
                href="https://github.com/burhank" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <Github size={18} className="text-neon-blue" />
                <span>github.com/burhank</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/burhank" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <Linkedin size={18} className="text-neon-blue" />
                <span>linkedin.com/in/burhank</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
