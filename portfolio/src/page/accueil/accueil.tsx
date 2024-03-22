import React from "react";
import './accueil.css'
import AccordeonPerso from "../../components/accordeonPerso/accordeonPerso.tsx";
import AccordeonPro from "../../components/accordeonPro/accordeonPro.tsx";


const Acceuil: React.FC = () => {
  
  return (
    <div className="accueil">
      <div className="contenu">
        <div className="arrondi">
          <h2>Bonjour ici Sabatier Aymeric</h2>
        </div>
        <div className="info">
            <div>
              <h3>Developpeur Backend</h3>
              <p>Je suis un nouveau développeur Back End. Je suis actuelement en alternance chez Opjectif-PI, en effectuant ma formation dans le BUT informatique de grenoble.</p>
            </div>
            <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="avatar" />
        </div>
        <div className="info_personnel">
          <AccordeonPerso />
        </div>
        <div className="info_professionnel">
          <h2>Parlons proggramation maintenant</h2>
          <AccordeonPro />
        </div>
      </div>
    </div>
  );
}

export default Acceuil;