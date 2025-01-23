import React from "react";
import './projectPage.css';

import Project from "../../components/project/project.tsx";


const ProjectPage: React.FC = () => {
return(
    <div className="projectPage">
        <h2>Projets</h2>
        <p>Voici quelques projets que j'ai réalisés</p>
        <div className="project_detail">
            <Project title="Site aux enchères" technologies={['PHP', 'SQL', 'GIT']} description="Ce projet nous a permis de réaliser un site aux enchères. Accompagné d'une base de données en SQL"
                img_description={['enchères.png']} role="Developpeur Bakc end, Réalisation des fonctionnalités liant l'interface et la base de donnée"/>
            <Project title="Black Hole Bot" technologies={['Python', 'GIT']} description="A l'occasion d'une GameJam organisée par l'IUT 2 Informatique de Grenoble, nous avons développé en groupe de 4, un jeu sur le thème d'un robot et de la gravité. Dans ce jeu, il va falloir survivre 60 secondes sous différentes gravités afin de récupérer des pièces pour réparer son vaisseau. Ce jeu a été réalisé à l'aide de la librairie python pygame."
                img_description={['blackholebot-1.png']} role="Ecriture du story board et developpeur Full stack. Aide à la réalisation du design et des fonctionnalités, particulièremet la gravité"/>
            <Project title="Tour des héros" technologies={['Angular', 'Firebase', 'GIT']} description="Ce projet nous a permis découvrir le farmework angular. Nous devions créer un projet de héros. Celui ci nous permettait de créer des héros, en leur assignant des compétences mais aussi des armes. Ceux ci pouvait se battre entre eux. Les dégats infligés était calculés en alétaoire pondéré en fonction de la défense du héros recevant le coup et de l'attaque du héros attaquant."
                img_description={['TOH1.png', 'TOH2.png']} role="Projet réalisé seul"/>
            <Project title="Démineur" technologies={['Flutter', 'Dart', 'GIT']} description="Ce projet nous a permis de découvrir le framework Flutter. Nous devions réaliser un démineur. Celui ci devait être jouable sur mobile. Nous avons donc réalisé un démineur avec 3 niveaux de difficulté. Chaque partie demande un nom de joueur et sauvegarde le score a la fin de la partie. Ces points sont calculé en fonction du temps et de la difficulté de la grille." 
                img_description={['demineur-1.png', 'demineur-2.png', 'demineur-3.png']} role="Projet réalisé seul"/>
        </div>
    </div>
)};

export default ProjectPage;