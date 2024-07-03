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
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, img_description, role }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div className="projectbody">
            <div className="flex flex-wrap -m-3">
                <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                        <div className="bg-cover h-48"></div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="mb-4 text-2xl">{title}</h3>
                            <div className="mb-4 text-grey-darker text-sm flex-1">
                                <p>{description}</p>
                                <div className="img-container">
                                   <img src={process.env.PUBLIC_URL + '/img/' + img_description[0]} alt={title} />
                                 </div>
                                <button onClick={handleShowDetails} className="details-button">Voir plus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDetails && <ProjectDetails title={title} description={description} img={img_description} technologies={technologies} role={role} onClose={handleCloseDetails} />}
        </div>
    );
}

export default Project;
