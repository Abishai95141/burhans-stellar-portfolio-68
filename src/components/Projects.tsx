
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  github: string;
  demo?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Traffic Management System",
      description: "Designed an LSTM-based model to predict traffic congestion and reroute vehicles in real-time using live feeds.",
      tools: ["Python", "TensorFlow", "OpenCV"],
      image: "bg-gradient-to-br from-blue-900 to-indigo-900",
      github: "https://github.com/burhank/traffic-management"
    },
    {
      id: 2,
      title: "AI Chatbot for Students",
      description: "Built a natural language processing-based chatbot to assist students with academic resources and scheduling.",
      tools: ["NLTK", "Flask", "Dialogflow"],
      image: "bg-gradient-to-br from-purple-900 to-indigo-900",
      github: "https://github.com/burhank/student-chatbot",
      demo: "https://student-chatbot.demo.app"
    },
    {
      id: 3,
      title: "Fake News Detection",
      description: "Developed a deep learning model to classify fake news using LSTM and word embeddings.",
      tools: ["Python", "Keras", "Scikit-learn"],
      image: "bg-gradient-to-br from-cyan-900 to-blue-900",
      github: "https://github.com/burhank/fake-news-detection"
    },
    {
      id: 4,
      title: "Disease Prediction System",
      description: "Created a machine learning model that predicts diseases based on symptoms using ensemble learning techniques.",
      tools: ["Python", "XGBoost", "Flask", "React"],
      image: "bg-gradient-to-br from-emerald-900 to-teal-900",
      github: "https://github.com/burhank/disease-prediction"
    }
  ];

  // Mobile view uses a carousel
  const mobileSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Desktop view uses a different animation approach
  const desktopSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="section py-24">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My <span className="neon-text">Projects</span>
        </motion.h2>
        
        {/* Mobile & Tablet View - Carousel */}
        <motion.div 
          className="md:hidden"
          variants={mobileSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <motion.div 
                    variants={itemVariants}
                    className="glass rounded-xl overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
                    }}
                  >
                    {/* Project Image/Gradient */}
                    <div className={`h-48 ${project.image} flex items-center justify-center`}>
                      <h3 className="text-2xl font-bold text-white text-center px-4">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-secondary text-gray-300 px-2 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
                        >
                          GitHub <Github size={14} />
                        </a>
                        
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
                          >
                            Live Demo <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>
        
        {/* Desktop View - Interactive Display */}
        <motion.div 
          className="hidden md:grid grid-cols-5 gap-8"
          variants={desktopSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Project Navigation */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <div className="space-y-4 sticky top-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? 'glass neon-border' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium ${
                    activeProject === index ? 'text-neon-blue' : 'text-gray-400'
                  }`}>
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Project Details */}
          <motion.div 
            className="col-span-4 glass rounded-xl overflow-hidden"
            variants={itemVariants}
            key={activeProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 12 
            }}
          >
            <div className={`h-60 ${projects[activeProject].image} flex items-center justify-center`}>
              <motion.h3 
                className="text-3xl font-bold text-white text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {projects[activeProject].title}
              </motion.h3>
            </div>
            
            <div className="p-8">
              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {projects[activeProject].description}
              </motion.p>
              
              <motion.div 
                className="mb-8 flex flex-wrap gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {projects[activeProject].tools.map((tool, i) => (
                  <motion.span 
                    key={i}
                    className="text-sm bg-secondary text-gray-300 px-3 py-1.5 rounded-full"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(14, 165, 233, 0.2)",
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex space-x-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href={projects[activeProject].github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={18} />
                  View on GitHub
                </motion.a>
                
                {projects[activeProject].demo && (
                  <motion.a 
                    href={projects[activeProject].demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
