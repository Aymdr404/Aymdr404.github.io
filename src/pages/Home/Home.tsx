import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="title">
          <span className="greeting">Bonjour, je suis</span>
          <span className="name">Sabatier Aymeric</span>
        </h1>
        <p className="subtitle">Développeur Web Full Stack</p>
        <div className="description">
          Passionné par la création d'applications web belles et fonctionnelles.
          Je suis spécialisé dans les technologies web modernes et j'aime donner vie aux idées.
        </div>
        <div className="cta-buttons">
          <a href="#projects" className="primary-button">Voir Mes Projets</a>
          <a href="#contact" className="secondary-button">Me Contacter</a>
        </div>
      </div>
    </div>
  );
};

export default Home; 