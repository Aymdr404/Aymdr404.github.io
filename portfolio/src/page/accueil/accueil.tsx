import React from "react";
import './accueil.css'


const Acceuil: React.FC = () => {
  return (
    <div className="accueil">
      <h1>Acceuil</h1>
      <video autoPlay muted loop id="myVideo">
        <source src="./video/world_-_2.mp4" type="video/mp4" />
      </video>
      <div className="arrondi">
        <p>Je suis un développeur web</p>

        <div>
          <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="avatar" />
        </div>

      </div>
    </div>
  );
}

export default Acceuil;