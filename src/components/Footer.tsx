
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-300 text-center md:text-left">
              Made with 💻 by Burhan K
            </p>
            <p className="text-gray-500 text-center md:text-left">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/burhank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/burhank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:burhank@email.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-neon-blue text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue text-sm">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-neon-blue text-sm">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-neon-blue text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
