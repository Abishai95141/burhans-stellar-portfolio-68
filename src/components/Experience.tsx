
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          Work <span className="neon-text">Experience</span>
        </h2>

        <div className="flex justify-center">
          <div className="relative max-w-3xl w-full">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent transform md:translate-x-[-0.5px] z-0"></div>

            {/* Experience Item */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center mb-8">
              <div className="order-1 md:w-1/2 md:pr-8 md:text-right">
                <div className="glass p-6 md:ml-auto animate-fade-in">
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
                </div>
              </div>
              
              <div className="order-0 md:order-2 md:w-1/2 flex justify-start md:justify-start md:pl-8">
                <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center -ml-5 md:ml-0 md:-mr-5 shadow-lg shadow-neon-blue/20 z-10">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Additional experiences can be added here */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
