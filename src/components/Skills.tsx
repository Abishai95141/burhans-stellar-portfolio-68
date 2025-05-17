
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills: Skill[] = [
    { name: "Python", percentage: 90, color: "#3776AB", icon: "🐍" },
    { name: "Machine Learning", percentage: 85, color: "#FF6B6B", icon: "🧠" },
    { name: "Deep Learning", percentage: 80, color: "#6B66FF", icon: "🔮" },
    { name: "NLP", percentage: 75, color: "#00BFA6", icon: "💬" },
    { name: "Data Visualization", percentage: 80, color: "#FFD166", icon: "📊" },
    { name: "Django/Flask", percentage: 70, color: "#118B4B", icon: "🌐" },
    { name: "SQL", percentage: 60, color: "#FF9F1C", icon: "🗃️" },
  ];

  return (
    <section id="skills" className="section bg-black/20 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          My <span className="neon-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </div>
              
              <div className="relative h-3 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full left-0 top-0 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                />
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className={`text-sm font-medium`} style={{ color: skill.color }}>
                  {skill.percentage}%
                </span>
              </div>
              
              {/* Glowing effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
                  filter: "blur(10px)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
