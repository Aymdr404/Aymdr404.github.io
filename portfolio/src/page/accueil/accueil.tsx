import React from "react";
import './accueil.css'
import { TabView, TabPanel } from 'primereact/tabview';


const Acceuil: React.FC = () => {
  
  return (
    <div className="accueil">
      <h1>Acceuil</h1>
      <video autoPlay muted loop id="myVideo">
        <source src="./video/moon.mp4" type="video/mp4" />
      </video>
      <div className="arrondi">
        <h2>Bonjour ici Sabatier Aymeric</h2>
        <div className="info">
          <div>
            <h3>Developpeur Backend</h3>
            <p>Je suis un nouveau développeur Back End. Je suis actuelement en alternance chez Open Prod, en effectuant ma formation dans le BUT informatique de grenoble.</p>
          </div>
          <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="avatar" />
        </div>

        <TabView>
          <TabPanel header="Mon coté sport" rightIcon="pi pi-user ml-2">
              <p className="m-0">
                  Je suis un grand sportif, j'ai pratiqué le judo pendant 10 ans, le foot pendant 5 ans, la musculation pendant 3 ans et la course à pied pendant 2 ans.
                  J'ai également fait du tennis, du badminton, du basket et du handball. J'ai également fait de l'escalade et du ski.
              </p>
          </TabPanel>
          <TabPanel header="Mon coté cuisinier">
              <p className="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                  ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
          </TabPanel>
          <TabPanel header="Mon coté acharné">
              <p className="m-0">
                Il m'arrive souvent d'être pris d'une envie de découvrir un nouveau domaine. J'aime bien être polyvalent afin de savoir à quoi j'ai affaire dans n'importe quel situation.
                Je trouve que me donner des défis d'apprentissage ainsi me permet de me maintenir en forme mentalement. De plus il y a quelque chose de drôle sur le fait d'apprendre un domaine dans une durée limité.
              </p>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default Acceuil;