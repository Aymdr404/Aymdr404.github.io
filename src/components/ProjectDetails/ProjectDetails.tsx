import React from "react";
import './ProjectDetails.css'
import { Chip } from 'primereact/chip';


interface ProjectDetailsProps {
    title: string;
    description: string;
    img: string;
    onClose: () => void;
    technologies: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, description, img, technologies, onClose }) => {
    return (
        <div className="project-details-overlay">
            <div className="project-details">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={img} alt={title} />
                <div className="technologies">
                    <h3>Technologies utilisées:</h3>
                    <div className="chips">
                        {technologies.map((tech, index) => (
                            <Chip key={index} label={tech} className="mr-2 mb-2" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
