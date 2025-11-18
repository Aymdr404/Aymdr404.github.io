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
    { title: 'Développeur web PHP', 
      company: 'Spartoo',
      period: 'Septembre 2025 => Maintenant', 
      description: 'Développeur web PHP. Développement des applications interne utilisé par nos revendeurs',
      technologies: ['PHP', 'SQL', 'Relation client', 'API'],
      logo: 'logo_spartoo.png', 
    },
    {
      title: 'Développeur Full Stack',
      company: 'Absolut System',
      period: 'Décembre 2024 - Mars 2025',
      description: 'Développement d\'une interface web React et d\'une API NodeJS pour le contrôle de matériel électronique via ethernet.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Communication Ethernet'],
      logo: 'logo_AbsolutSystem.png'
    },
    {
      title: 'Développeur Backend',
      company: 'Objectif-Pi',
      period: 'Août 2023 - Août 2024',
      description: 'Développement backend en Python, implémentation des demandes clients sur notre système ERP.',
      technologies: ['Python', 'ERP', 'Gestion de Base de Données', 'Développement API'],
      logo: 'logo_OP.png'
    },
    {
      title: 'Développeur Frontend',
      company: 'Remedee-labs',
      period: 'Avril 2023 - Juin 2023',
      description: 'Développement d\'une application web pour la gestion des comptes clients avec Angular.',
      technologies: ['Angular', 'TypeScript', 'APIs REST', 'Authentification Utilisateur'],
      logo: 'Logo_RemedeeLabs.png'
    },
    {
      title: 'Étudiant en Informatique',
      company: 'BUT Informatique',
      period: 'Septembre 2021 - Juillet 2024',
      description: 'Bachelor Universitaire de Technologie en Informatique en alternance chez Objectif-Pi.',
      technologies: ['Développement Logiciel', 'Informatique', 'Technologies Web', 'Conception de Base de Données'],
      logo: 'logo_BUT.png'
    }
  ];

  return (
    <div className="page-container experience-page">
      <h1 className="section-title">Parcours Professionnel</h1>
      
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