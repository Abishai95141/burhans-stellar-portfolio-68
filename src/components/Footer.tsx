
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8
      }
    }
  };

  return (
    <motion.footer 
      className="bg-black/30 py-10 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-300 text-center md:text-left"
              whileHover={{ color: "#0ea5e9" }}
              transition={{ duration: 0.3 }}
            >
              Made with 💻 by Burhan K
            </motion.p>
            <p className="text-gray-500 text-center md:text-left">
              &copy; {currentYear} All rights reserved
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mb-6 md:mb-0"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/burhank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/burhank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:burhank@email.com" 
              className="social-icon"
              aria-label="Email"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['home', 'about', 'projects', 'contact'].map((link) => (
                <motion.li key={link}>
                  <motion.a 
                    href={`#${link}`} 
                    className="text-gray-400 hover:text-neon-blue text-sm"
                    whileHover={{ scale: 1.1, x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
