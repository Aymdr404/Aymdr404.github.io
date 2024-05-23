import React from "react";
import './accueil.css'
import AccordeonPerso from "../../components/accordeonPerso/accordeonPerso.tsx";
import AccordeonPro from "../../components/accordeonPro/accordeonPro.tsx";
import Experience from "../../components/experiences/experiences.tsx";


const Acceuil: React.FC = () => {
  
  return (
    <div className="accueil">
      <div className="contenu">
        <section className="arrondi">
          <h2>Bonjour ici Sabatier Aymeric</h2>
        </section>
        <section className="info">
            <div>
              <h3>Developpeur Backend</h3>
              <p>Je suis un nouveau développeur Back End. Je suis actuellement en alternance chez Opjectif-PI, en effectuant ma formation dans le BUT informatique de grenoble.</p>
            </div>
            <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="avatar" />
        </section>
        <section className="info_personnel">
          <h2>Parlons de moi</h2>
          <AccordeonPerso />
        </section>
        <section className="info_professionnel">
          <h2>Parlons programmation maintenant</h2>
          <AccordeonPro />
        </section>
        <section className="info_project">
          <h2>Mes expériences</h2>
          <Experience />
        </section>
        <section className="info_contact">
          <h2>Contact</h2>
          <p>Vous pouvez me contacter par mail ou par téléphone</p>
          <p>Mail:</p>
        </section>
      </div>
    </div>
  );
}

export default Acceuil;