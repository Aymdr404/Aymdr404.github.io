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
        { name: 'Angular', level: 70, icon: 'devicon-angularjs-plain' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85, icon: 'devicon-nodejs-plain' },
        { name: 'Python', level: 80, icon: 'devicon-python-plain' },
        { name: 'SQL', level: 60, icon: 'devicon-mysql-plain' },
        { name: 'MongoDB', level: 45, icon: 'devicon-mongodb-plain' },
      ],
    },
    {
      category: 'Outils & Autres',
      items: [
        { name: 'Git', level: 85, icon: 'devicon-git-plain' },
        { name: 'Docker', level: 60, icon: 'devicon-docker-plain' },
        { name: 'Linux', level: 60, icon: 'devicon-linux-plain' },
      ],
    },
  ];

  const calculateCirclePath = (level: number) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;
    return {
      circumference,
      offset,
    };
  };

  return (
    <div className="page-container skills-page">
      <h1 className="section-title">Compétences & Expertise</h1>
      
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h2>{skillCategory.category}</h2>
            <div className="skills-list">
              {skillCategory.items.map((skill, skillIndex) => {
                const { circumference, offset } = calculateCirclePath(skill.level);
                return (
                  <div key={skillIndex} className="skill-item">
                    {skill.icon && <i className={skill.icon}></i>}
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-progress">
                        <svg className="skill-progress-circle" viewBox="0 0 100 100">
                          <circle
                            className="skill-progress-circle-bg"
                            cx="50"
                            cy="50"
                            r="42"
                          />
                          <circle
                            className="skill-progress-circle-fill"
                            cx="50"
                            cy="50"
                            r="42"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                          />
                        </svg>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 