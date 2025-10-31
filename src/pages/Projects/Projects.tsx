import React, { useState, useEffect } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  role: string;
  type: 'professional' | 'personal';
  url?: string;
  github?: string;
  site?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-image-container">
          <img
            src={project.images && project.images.length > 0
              ? process.env.PUBLIC_URL + '/img/' + project.images[currentImageIndex]
              : process.env.PUBLIC_URL + '/img/default-image.svg'}
            alt={project.title}
          />
          {project.images && project.images.length > 1 && (
            <>
              <button
                className="nav-arrow prev"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="nav-arrow next"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="image-navigation">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
                <button
                  className={`auto-play-toggle ${isAutoPlaying ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAutoPlaying(!isAutoPlaying);
                  }}
                  aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  <i className={`fas fa-${isAutoPlaying ? 'pause' : 'play'}`}></i>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="modal-info">
          <h2>{project.title}</h2>
          <p className="role">Role: {project.role}</p>
          <p className="description">{project.description}</p>

          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="project-links">
            {(project.site || project.url) && (
              <a
                href={project.site || project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link site-link"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-globe"></i> Voir le site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github"></i> Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'professional' | 'personal'>('all');

  const projects: Project[] = [
    // Projets Professionnels
    {
      id: 1,
      title: "Interface de Contrôle Hardware",
      description: "Développement d'une interface web React et d'une API NodeJS permettant de contrôler une carte électronique via ethernet. L'interface permet la configuration et le monitoring en temps réel des paramètres de la carte.",
      technologies: ["React", "Node.js", "TypeScript", "WebSocket", "Communication Ethernet", "Contrôle Hardware"],
      images: ["hardware-interface.png"],
      role: "Développeur Full Stack",
      type: "professional"
    },
    {
      id: 2,
      title: "Application de Gestion ERP",
      description: "Développement backend en Python pour un système ERP, implémentant des fonctionnalités de gestion des demandes clients. L'application permet le suivi des commandes, la gestion des stocks et l'automatisation des processus métier.",
      technologies: ["Python", "ERP", "SQL", "API REST", "Automatisation des Processus"],
      images: ["erp-system.jpeg"],
      role: "Développeur Backend",
      type: "professional"
    },
    {
      id: 3,
      title: "Web App Gestion de Comptes",
      description: "Développement d'une application web Angular pour la gestion des comptes clients. L'application permet aux utilisateurs de gérer leurs profils, suivre leurs activités et accéder à leurs services personnalisés.",
      technologies: ["Angular", "TypeScript", "APIs REST", "Authentification Utilisateur", "Material Design"],
      images: ["default-image.svg"],
      role: "Développeur Frontend",
      type: "professional"
    },
    // Projets Personnels
    {
      id: 4,
      title: "Portfolio Personnel",
      description: "Un site web portfolio moderne développé avec React et TypeScript, mettant en valeur mes compétences et expériences professionnelles. Le site présente une interface utilisateur élégante avec des animations fluides et un design responsive.",
      technologies: ["React", "TypeScript", "CSS3", "React Router", "Design Responsive"],
      images: ["portfolio.png"],
      role: "Développeur Full Stack",
      type: "personal",
      github: "https://github.com/Aymdr404/Aymdr404.github.io"
    },
    {
      id: 5,
      title: "Site de Recettes de Cuisine",
      description: "Je suis convaincu que cuisiner doit être un plaisir quotidien. C'est pourquoi j'ai créé ce site pour vous aider à cuisiner des plats savoureux, équilibrés et adaptés à vos envies. De plus, ce projet me permet de pratiquer mes compétences en développement web et en gestion de base de données.",
      technologies: ["Typescript", "Git", "Firebase"],
      images: ["projet_recette1.png", "projet_recette2.png", "projet_recette3.png"],
      role: "Developer",
      type: "personal",
      github: "https://github.com/Aymdr404/Cuisine-artisanale",
      site: "https://www.aymeric-sabatier.fr/Cuisine-artisanale"
    },
    {
      id: 6,
      title: "Black Hole Bot",
      description: "A l'occasion d'une GameJam organisée par l'IUT 2 Informatique de Grenoble, nous avons développé en groupe de 4, un jeu sur le thème d'un robot et de la gravité. Dans ce jeu, il va falloir survivre 60 secondes sous différentes gravités afin de récupérer des pièces pour réparer son vaisseau. Ce jeu a été réalisé à l'aide de la librairie python pygame.",
      technologies: ["Python", "Git", "Pygame"],
      images: ["blackholebot-1.png"],
      role: "Game Developer",
      type: "personal",
    },
    {
      id: 7,
      title: "Démineur",
      description: "Développement d'un démineur en Python, permettant de jouer contre l'ordinateur.",
      technologies: ["Python", "Git"],
      images: ["demineur-1.png", "demineur-2.png", "demineur-3.png"],
      role: "Developer",
      type: "personal",
    },
    {
      id: 8,
      title: "Code Civile",
      description: "Développement d'un site permettant de montrer un article du code civile par jour. Utilise une api poura récuperer cette article, puis génère une iage our le pubier sur twitter.",
      technologies: ["Typescript", "Javascript"],
      images: ["default-image.svg"],
      role: "Developpeur",
      type: "personal",
	  site: "https://www.aymeric-sabatier.fr/daily-piraterie/",
    }
  ];

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.type === filter
  );

  return (
    <div className="page-container projects-page">
      <h1 className="section-title">Mes Projets</h1>

      <div className="projects-filter">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Tous
        </button>
        <button
          className={`filter-btn ${filter === 'professional' ? 'active' : ''}`}
          onClick={() => setFilter('professional')}
        >
          Professionnels
        </button>
        <button
          className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
          onClick={() => setFilter('personal')}
        >
          Personnels
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className={`project-card card ${project.type}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              <img
                src={project.images && project.images.length > 0
                  ? process.env.PUBLIC_URL + '/img/' + project.images[0]
                  : process.env.PUBLIC_URL + '/img/default-image.svg'}
                alt={project.title}
              />
              <div className="project-type-badge">
                {project.type === 'professional' ? 'Pro' : 'Perso'}
              </div>
              {project.type === 'personal' && (project.site || project.github) && (
                <div className="project-links-overlay">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="quick-link site-link"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="quick-link github-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-tag">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
