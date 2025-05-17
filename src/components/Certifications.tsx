
import React from 'react';
import { Award } from 'lucide-react';

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

  return (
    <section id="certifications" className="section bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          <span className="neon-text">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="glass p-6 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Award size={24} className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.provider}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
