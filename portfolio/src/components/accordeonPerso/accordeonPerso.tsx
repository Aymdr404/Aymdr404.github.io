import { Accordion, AccordionTab } from 'primereact/accordion';
import React from "react";
import './accordeonPerso.css'

const AccordeonPerso: React.FC = () => {
    return(
      <Accordion activeIndex={0}>
        <AccordionTab header="Mon coté sportif">
          <div className="sport accordion">
            <section className="text">
              <p className="m-0">
                Je suis un grand sportif, j'ai pratiqué le basket pendant 10 ans, puis continué avec le hand-ball. Actuellement dans une équipe pré-national. Je suis toujours à fond pendant mes compétitions.
              </p>
              <p className="m-0">  
                J'ai un besoin de me dépenser physiquement. Je trouve que le sport est un bon moyen de se défouler et de se vider la tête et de me permettre de me concentrer sur mes objectifs.
              </p>
            </section>
            <img src="./img/hand.jpg" alt="hand" />
          </div>
            
        </AccordionTab>
        <AccordionTab header="Mon coté cuisinier">
          <div className="cuisine accordion">
          <img src="./img/cuisine.jpg" alt="cuisine" />
            <section className="text">
              <p className="m-0">
                  A côté de cela, j'aime bien cuisiner. J'aime bien faire des plats de tout les jours, mais aussi des plats plus élaborés.
              </p>
              <p className="m-0">   
                  Cela me donne des objectifs différent puisque il faut être précis pour avoir une recette parfaite, mais aussi laisser place à la créativité pour faire des plats uniques.
              </p>
            </section>
          </div>
        </AccordionTab>
        <AccordionTab header="Mon coté acharné">
          <div className="travail accordion">
            <section className="text">
              <p className="m-0">
                Il m'arrive souvent d'être pris d'une envie de découvrir un nouveau domaine. J'aime bien être polyvalent afin de savoir à quoi j'ai affaire dans n'importe quel situation.
              </p>
              <p className="m-0">
                Je trouve que me donner des défis d'apprentissage ainsi me permet de me maintenir en forme mentalement. De plus il y a quelque chose de drôle sur le fait d'apprendre un domaine dans une durée limité.
              </p>
              <p className="m-0">  
                Mon dernier projet à été de me mettre à l'animation 3D avec Blender. Je suis des petit tuto qui me permette de comprendre les bases de l'animation. Tout en me permettant de me détendre.
              </p>
            </section>
            <video autoPlay muted loop id="myVideo">
              <source src="./video/araignee.mp4" type="video/mp4" />
            </video>
          </div>
        </AccordionTab>
      </Accordion>
    )
}

export default AccordeonPerso;