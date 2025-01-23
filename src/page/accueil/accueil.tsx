import React from "react";
import './accueil.css'

import Project from "../../components/project/project.tsx";

import AboutMe from "../aboutMe/aboutMe.tsx";
import InformationPage from "../informationPage/informationPage.tsx";
import ExperiencePage from "../experiencePage/experiencePage.tsx";
import ProjectPage from "../projectPage/projectPage.tsx";

const Acceuil: React.FC = () => {
  
  return (
    <div className="accueil">
      <AboutMe />
      <div className="contenu">
        <InformationPage />
        <ExperiencePage />
        <ProjectPage />        
      </div>
    </div>
  );
}

export default Acceuil;