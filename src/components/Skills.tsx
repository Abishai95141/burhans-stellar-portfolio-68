
import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "Python", percentage: 90 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Deep Learning", percentage: 80 },
    { name: "NLP", percentage: 75 },
    { name: "Data Visualization", percentage: 80 },
    { name: "Django/Flask", percentage: 70 },
    { name: "SQL", percentage: 60 },
  ];

  return (
    <section id="skills" className="section bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">
          My <span className="neon-text">Skills</span>
        </h2>

        <div className="glass p-8 max-w-3xl mx-auto">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="text-neon-blue">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
