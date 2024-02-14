import React from "react";
import './accueil.css'
import { Carousel } from 'primereact/carousel';

const Acceuil: React.FC = () => {
  const activite = ["Cuisine", "Handball", "Jouer", "Proggramer"]

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const activiteTemplate = (activite: string) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="activity-item-content">
          <img src="./img/baking.png" alt="avatar" />
          <div className="activity-item-name">{activite}</div>
        </div>
      </div>
    );
  }


  return (
    <div className="accueil">
      <h1>Acceuil</h1>
      <video autoPlay muted loop id="myVideo">
        <source src="./video/world.mp4" type="video/mp4" />
      </video>
      <div className="arrondi">
        <div className="profilContainer">
          <img src="./img/baking.png" alt="avatar" />
          <div className="profil">
            <h2>Sabatier Aymeric</h2>
            <p>Developpeur backend</p>
          </div>
        </div>

        <div className="caroussel Activite">
          <Carousel value={activite} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
          autoplayInterval={3000} itemTemplate={activiteTemplate} />
        </div>

        <div className="caroussel Projet">
          <Carousel value={activite} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
          autoplayInterval={4000} itemTemplate={activiteTemplate} />
        </div>

      </div>
    </div>
  );
}

export default Acceuil;