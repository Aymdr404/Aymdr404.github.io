import React from "react";
import './aboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <section className="presentation">
        <h2>Bonjour je suis</h2>
        <h1>Sabatier Aymeric</h1>
        <h2>Un devéloppeur web fullstack de france</h2>
      </section>
      <section className="description">        
        <img src={process.env.PUBLIC_URL + '/img/codage.png' }/>
        <p>Étant jeune diplômé du BUT informatique de l'UGA, je suis à la recherche d'un emploi afin de gagner d'avantage d'expérience sur les technologies du web, qu'elles soient front-end ou back-end. Je suis une personne autonome mais j'aime aussi travailler en équipe.</p>
      </section>
      <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
}

export default AboutMe;
