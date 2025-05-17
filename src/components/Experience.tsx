
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Work <span className="neon-text">Experience</span>
        </motion.h2>

        <div className="flex justify-center">
          <div className="relative max-w-3xl w-full">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 h-full w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent transform md:translate-x-[-0.5px] z-0"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Experience Item */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center mb-8">
              <motion.div 
                className="order-1 md:w-1/2 md:pr-8 md:text-right"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="glass p-6 md:ml-auto"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    AI Intern at InnovateAI Pvt Ltd
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Worked on optimizing ML models for predictive analytics in healthcare. Developed custom pipelines for data ingestion and model deployment.
                  </p>
                  <div className="flex items-center text-gray-400 justify-start md:justify-end">
                    <Calendar size={16} className="mr-1" />
                    <span>May 2024 – July 2024</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="order-0 md:order-2 md:w-1/2 flex justify-start md:justify-start md:pl-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center -ml-5 md:ml-0 md:-mr-5 shadow-lg shadow-neon-blue/20 z-10"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 15px 5px rgba(14, 165, 233, 0.4)" }}
                  animate={{ 
                    boxShadow: ["0 0 5px 0px rgba(14, 165, 233, 0.2)", "0 0 10px 3px rgba(14, 165, 233, 0.4)", "0 0 5px 0px rgba(14, 165, 233, 0.2)"]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    scale: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <Briefcase size={20} className="text-white" />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Additional experiences can be added here */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
