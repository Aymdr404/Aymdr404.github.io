import React from "react";
import './accueil.css'
import AccordeonPerso from "../../components/accordeonPerso/accordeonPerso.tsx";
import AccordeonPro from "../../components/accordeonPro/accordeonPro.tsx";
import Experience from "../../components/experiences/experiences.tsx";
import Project from "../../components/project/project.tsx";


const Acceuil: React.FC = () => {
  
  return (
    <div className="accueil">
      <section className="arrondi">
          <h2>Sabatier Aymeric</h2>
          <div className="blob"></div>
          <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </section>
      <div className="contenu">
        <section className="info">
            <div>
              <h3>Developpeur Backend</h3>
              <p>Je suis un nouveau développeur Back End. Je suis actuellement en alternance chez Opjectif-PI, en effectuant ma formation dans le BUT informatique de grenoble.</p>
            </div>
        </section>
        <section className="info_personnel">
          <h2>Parlons de moi</h2>
          <AccordeonPerso />
        </section>
        <section className="info_professionnel">
          <h2>Parlons programmation maintenant</h2>
          <AccordeonPro />
        </section>
        <section className="info_experience">
          <h2>Mes expériences</h2>
          <Experience />
        </section>
        <section className="info_project">
          <h2>Projets</h2>
          <p>Voici quelques projets que j'ai réalisé</p>
          <div className="project_detail">
            <Project title="Site aux enchères" description="Ce projet nous demandais a permis de réaliser un site aux enchères.  accompagné d'une base de données en SQL" img="img1.jpg"/>
            <Project title="Black Hole Bot" description="A l'occasion d'une GameJam organisée par l'IUT 2 Informatique de Grenoble, nous avons développé en groupe de 4, un jeu sur le thème d'un robot et de la gravité. Dans ce jeu, il va falloir survivre 60 secondes sous différentes gravités afin de récupérer des pièces pour réparer son vaisseau. Ce jeu a été réalisé à l'aide de la librairie python pygame." img="img2.jpg"/>
            <Project title="Projet 3" description="Description du projet 3" img="img3.jpg"/>
          </div>
        </section>
        {/* <section className="info_contact">
          <h2>Contact</h2>
          <p>Vous pouvez me contacter par mail ou par téléphone</p>
          <p>Mail:</p>
        </section> */}
      </div>
    </div>
  );
}

export default Acceuil;