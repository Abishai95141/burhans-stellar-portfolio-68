
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          Get in <span className="neon-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass p-8 animate-fade-in">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-secondary/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-glow w-full py-3"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map and Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="glass p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:burhank@email.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span>burhank@email.com</span>
                </a>
                
                <a
                  href="https://github.com/burhank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <Github size={20} />
                  </div>
                  <span>github.com/burhank</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/burhank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/burhank</span>
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="glass p-2 h-64 animate-slide-up overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2266853400514!2d80.13690841538545!3d13.090621090773924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sRMK%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1652545302838!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy" 
                title="RMK College of Engineering and Technology"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
