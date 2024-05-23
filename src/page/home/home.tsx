import React from "react";
import './home.css'
import Navbar from "../../components/navbar/navbar.tsx";
import Acceuil from "../accueil/accueil.tsx";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../aboutMe/aboutMe.tsx";
import LinkMe from "../../components/linkMe/linkMe.tsx";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Navbar />
        <div className="route-content">
          <Routes >
            <Route path="/" element={<Acceuil />} />
            <Route path="/About-me" element={<AboutMe />} />
          </Routes>
        </div>
      </header>
      <div className="footer">
        <LinkMe />
      </div>
    </div>
  );
}

export default Home;
