import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <h1>About me</h1>
      <video autoPlay muted loop id="myVideo">
        <source src="./video/planet_jupiter.mp4" type="video/mp4" />
      </video>
      <div className="arrondi">
        </div>
    </div>
  );
}

export default AboutMe;
