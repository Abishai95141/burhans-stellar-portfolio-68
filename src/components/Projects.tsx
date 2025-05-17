
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My <span className="neon-text">Projects</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`glass overflow-hidden transform transition-all duration-300 ${
                hoverIndex === index ? 'scale-[1.02] neon-border' : ''
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
              }}
            >
              {/* Project Image/Gradient */}
              <motion.div 
                className={`h-48 ${project.image} flex items-center justify-center`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white text-center px-4"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <motion.span 
                      key={toolIndex}
                      className="text-xs bg-secondary text-gray-300 px-2 py-1 rounded"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    GitHub <ArrowRight size={14} />
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-blue transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Live Demo <ArrowRight size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
