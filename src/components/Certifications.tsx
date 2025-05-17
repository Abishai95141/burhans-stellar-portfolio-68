
import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    { 
      id: 1, 
      title: "Google Data Analytics", 
      provider: "Coursera",
      date: "August 2023"
    },
    { 
      id: 2,
      title: "Deep Learning Specialization", 
      provider: "Andrew Ng",
      date: "December 2023"
    },
    { 
      id: 3,
      title: "Introduction to TensorFlow", 
      provider: "edX",
      date: "February 2024"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="certifications" className="section bg-black/20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="neon-text">Certifications</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              className="glass p-6 flex flex-col items-center text-center"
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Award size={24} className="text-neon-blue" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {cert.provider}
              </motion.p>
              <motion.p 
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {cert.date}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
