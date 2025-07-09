import React from 'react';
import './Skills.css';

const skillsByLevel = [
  {
    level: 'Expert',
    className: 'expert',
    items: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'HTML/CSS', icon: 'devicon-html5-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    ],
  },
  {
    level: 'Avancé',
    className: 'advanced',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'SQL', icon: 'devicon-mysql-plain' },
    ],
  },
  {
    level: 'Intermédiaire',
    className: 'intermediate',
    items: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Angular', icon: 'devicon-angularjs-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
  },
  // Ajoute une section Découverte si tu veux
  // {
  //   level: 'Découverte',
  //   className: 'beginner',
  //   items: [ ... ]
  // },
];

const Skills: React.FC = () => {
  return (
    <div className="page-container skills-page">
      <h1 className="section-title">Compétences & Expertise</h1>
      <div className="skills-levels">
        {skillsByLevel.map((group, idx) => (
          <div key={group.level} className={`skills-level-group ${group.className}`}>
            <h2 className={`skills-level-title ${group.className}`}>{group.level}</h2>
            <div className="skills-badges">
              {group.items.map((skill) => (
                <span className="skill-badge" key={skill.name}>
                  {skill.icon && <i className={skill.icon}></i>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 