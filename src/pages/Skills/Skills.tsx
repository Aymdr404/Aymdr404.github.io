import React from 'react';
import './Skills.css';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 90, icon: 'devicon-react-original' },
        { name: 'TypeScript', level: 85, icon: 'devicon-typescript-plain' },
        { name: 'HTML/CSS', level: 95, icon: 'devicon-html5-plain' },
        { name: 'JavaScript', level: 90, icon: 'devicon-javascript-plain' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85, icon: 'devicon-nodejs-plain' },
        { name: 'Python', level: 80, icon: 'devicon-python-plain' },
        { name: 'SQL', level: 75, icon: 'devicon-mysql-plain' },
        { name: 'MongoDB', level: 70, icon: 'devicon-mongodb-plain' },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 85, icon: 'devicon-git-plain' },
        { name: 'Docker', level: 70, icon: 'devicon-docker-plain' },
        { name: 'AWS', level: 65, icon: 'devicon-amazonwebservices-original' },
        { name: 'Linux', level: 75, icon: 'devicon-linux-plain' },
      ],
    },
  ];

  return (
    <div className="page-container skills-page">
      <h1 className="section-title">Skills & Expertise</h1>
      
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category card">
            <h2>{skillCategory.category}</h2>
            <div className="skills-list">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill.icon && <i className={skill.icon}></i>}
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 