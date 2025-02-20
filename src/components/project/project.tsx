// Project.tsx
import React, { useState } from "react";
import ProjectDetails from "../ProjectDetails/ProjectDetails.tsx";
import './project.css'

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    img_description: string[];
    role: string;
    url?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, img_description, role, url='' }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div className="projectbody">
            <h3 className="mb-4 text-2xl">{title}</h3>
            <div>
                <p>{description}</p>
                <div className="img-container">
                    <img src={process.env.PUBLIC_URL + '/img/' + img_description[0]} alt={title} />
                </div>
                <button onClick={handleShowDetails} className="details-button">Voir plus</button>
            </div>
            {showDetails && <ProjectDetails title={title} description={description} img={img_description} technologies={technologies} role={role} onClose={handleCloseDetails} url={url} />}
        </div>
    );
}

export default Project;
