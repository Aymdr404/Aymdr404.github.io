import React from "react";
import './experiencePage.css';


import Experience from "../../components/experiences/experiences.tsx";


const ExperiencePage: React.FC = () => {
    return (
        <div className="experiencePage">
            <h1>Mes expériences</h1>
            <Experience />
        </div>
    );
}


export default ExperiencePage;