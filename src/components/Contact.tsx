
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const contactVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2
      }
    }
  };

  const inputVariants = {
    initial: { y: 0 },
    focus: { y: -5, boxShadow: "0 5px 15px -5px rgba(14, 165, 233, 0.4)" }
  };

  return (
    <section id="contact" className="section bg-black/20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get in <span className="neon-text">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="glass p-8"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="button-glow w-full py-3 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Map and Contact Info */}
          <motion.div 
            className="flex flex-col space-y-6"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="glass p-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:burhank@email.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "rgba(14, 165, 233, 0.2)",
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail size={20} />
                  </motion.div>
                  <span>burhank@email.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/burhank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "rgba(14, 165, 233, 0.2)",
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  <span>github.com/burhank</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/burhank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "rgba(14, 165, 233, 0.2)",
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Linkedin size={20} />
                  </motion.div>
                  <span>linkedin.com/in/burhank</span>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div 
              className="glass p-2 h-64 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2266853400514!2d80.13690841538545!3d13.090621090773924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sRMK%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1652545302838!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy" 
                title="RMK College of Engineering and Technology"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
