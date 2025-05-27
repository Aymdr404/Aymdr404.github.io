import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Sabatier Aymeric</span>
        </h1>
        <p className="subtitle">Full Stack Web Developer</p>
        <div className="description">
          Passionate about creating beautiful and functional web applications.
          I specialize in modern web technologies and love bringing ideas to life.
        </div>
        <div className="cta-buttons">
          <a href="/projects" className="primary-button">View My Work</a>
          <a href="/contact" className="secondary-button">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Home; 