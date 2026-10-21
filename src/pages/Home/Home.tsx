import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="title">
          <span className="greeting">Bonjour, je suis</span>
          <span className="name">Aymeric Sabatier</span>
        </h1>
        <p className="subtitle">Développeur Web Full Stack</p>
        <div className="description">
          Passionné par la création d'applications web belles et fonctionnelles.
          Je suis spécialisé dans les technologies web modernes et j'aime donner vie aux idées.
        </div>
        <div className="cta-buttons">
          <Link to="/projects" className="primary-button">Voir mes projets</Link>
          <Link to="/contact" className="secondary-button">Me contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 