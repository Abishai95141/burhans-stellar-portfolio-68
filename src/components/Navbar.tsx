
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Certifications", href: "#certifications" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#home" className="text-2xl font-bold neon-text">
          Burhan<span className="text-white">K</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-white" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-neon-blue transition-colors font-medium text-sm"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in absolute w-full">
          <nav className="flex flex-col items-center py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-300 hover:text-neon-blue transition-colors font-medium"
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
