import React, { useState, useEffect, useRef } from "react";
import './accueil.css';

import AboutMe from "../aboutMe/aboutMe.tsx";
import InformationPage from "../informationPage/informationPage.tsx";
import ExperiencePage from "../experiencePage/experiencePage.tsx";
import ProjectPage from "../projectPage/projectPage.tsx";

const Accueil: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<HTMLDivElement[]>([]); // Références pour chaque section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            // Ajouter l'index à l'ensemble si la section entre dans la vue
            setVisibleSections((prev) => new Set([...prev, index]));
          } else {
            // Retirer l'index si la section sort de la vue
            setVisibleSections((prev) => {
              const updated = new Set(prev);
              updated.delete(index);
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 } // 20% de visibilité avant de changer l'état
    );

    // Observer chaque section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Nettoyer l'observateur
  }, []);

  return (
    <div className="accueil">
      <div
        className={`fade-in ${visibleSections.has(0) ? 'visible' : ''}`}
        data-index={0}
        ref={(el) => (sectionsRef.current[0] = el!)}
      >
        <AboutMe />
      </div>

      <div className="contenu">
        <div
          className={`fade-in ${visibleSections.has(1) ? 'visible' : ''}`}
          data-index={1}
          ref={(el) => (sectionsRef.current[1] = el!)}
        >
          <InformationPage />
        </div>
        <div
          className={`fade-in ${visibleSections.has(2) ? 'visible' : ''}`}
          data-index={2}
          ref={(el) => (sectionsRef.current[2] = el!)}
        >
          <ExperiencePage />
        </div>
        <div
          className={`fade-in ${visibleSections.has(3) ? 'visible' : ''}`}
          data-index={3}
          ref={(el) => (sectionsRef.current[3] = el!)}
        >
          <ProjectPage />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
