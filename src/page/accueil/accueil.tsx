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
          <div className="blob-acceuil"></div>
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
          <div className="blob-corp-right"></div>
        </section>
        <section className="info_professionnel">
          <h2>Parlons programmation maintenant</h2>
          <AccordeonPro />
        </section>
        <section className="info_experience">
          <h2>Mes expériences</h2>
          <Experience />
          <div className="blob-corp-left"></div>
        </section>
        <section className="info_project">
          <h2>Projets</h2>
          <p>Voici quelques projets que j'ai réalisés</p>
          <div className="project_detail">
            <Project title="Site aux enchères" technologies={['PHP', 'SQL', 'GIT']} description="Ce projet nous a permis de réaliser un site aux enchères.  accompagné d'une base de données en SQL"
             img_description={['enchères.png']}/>
            <Project title="Black Hole Bot" technologies={['Python', 'GIT']} description="A l'occasion d'une GameJam organisée par l'IUT 2 Informatique de Grenoble, nous avons développé en groupe de 4, un jeu sur le thème d'un robot et de la gravité. Dans ce jeu, il va falloir survivre 60 secondes sous différentes gravités afin de récupérer des pièces pour réparer son vaisseau. Ce jeu a été réalisé à l'aide de la librairie python pygame."
              img_description={['blackholebot-1.png']}/>
            <Project title="Tour des héros" technologies={['Angular', 'Firebase', 'GIT']} description="Ce projet nous a permis découvrir le farmework angular. Nous devions créer un projet de héros. Celui ci nous permettait de créer des héros, en leur assignant des compétences mais aussi des armes. Ceux ci pouvait se battre entre eux. Les dégats infligés était calculés en alétaoire pondéré en fonction de la défense du héros recevant le coup et de l'attaque du héros attaquant."
              img_description={['TOH1.png', 'TOH2.png']}/>
            <Project title="Démineur" technologies={['Flutter', 'Dart', 'GIT']} description="Ce projet nous a permis de découvrir le framework Flutter. Nous devions réaliser un démineur. Celui ci devait être jouable sur mobile. Nous avons donc réalisé un démineur avec 3 niveaux de difficulté. Chaque partie demande un nom de joueur et sauvegarde le score a la fin de la partie. Ces points sont calculé en fonction du temps et de la difficulté de la grille." 
              img_description={['demineur-1.png', 'demineur-2.png', 'demineur-3.png']}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Acceuil;