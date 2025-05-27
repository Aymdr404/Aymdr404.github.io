import React from 'react';
import './Experience.css';

interface TimelineEvent {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

const Experience: React.FC = () => {
  const experiences: TimelineEvent[] = [
    {
      title: 'Full Stack Developer',
      company: 'Absolut System',
      period: 'December 2024 - March 2025',
      description: 'Development of a React web interface and NodeJS API for controlling electronic hardware through ethernet.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Ethernet Communication'],
      logo: 'logo_AbsolutSystem.png'
    },
    {
      title: 'Backend Developer',
      company: 'Objectif-Pi',
      period: 'August 2023 - August 2024',
      description: 'Backend development in Python, implementing client requests on our ERP system.',
      technologies: ['Python', 'ERP', 'Database Management', 'API Development'],
      logo: 'logo_OP.png'
    },
    {
      title: 'Frontend Developer',
      company: 'Remedee-labs',
      period: 'April 2023 - June 2023',
      description: 'Development of a web application for customer account management using Angular.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'User Authentication'],
      logo: 'Logo_RemedeeLabs.png'
    },
    {
      title: 'Computer Science Student',
      company: 'BUT Informatique',
      period: 'September 2021 - July 2024',
      description: 'Bachelor\'s degree in Computer Science with alternating work-study program at Objectif-Pi.',
      technologies: ['Software Development', 'Computer Science', 'Web Technologies', 'Database Design'],
      logo: 'logo_BUT.png'
    }
  ];

  return (
    <div className="page-container experience-page">
      <h1 className="section-title">Professional Journey</h1>
      
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content card">
              <div className="experience-header">
                {experience.logo && (
                  <img 
                    src={process.env.PUBLIC_URL + `/img/${experience.logo}`}
                    alt={experience.company}
                    className="company-logo"
                  />
                )}
                <div className="header-text">
                  <h3 className="experience-title">{experience.title}</h3>
                  <h4 className="company-name">{experience.company}</h4>
                  <span className="period">{experience.period}</span>
                </div>
              </div>
              
              <p className="experience-description">{experience.description}</p>
              
              <div className="technologies">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 