import React from "react";
import ReactDOM from "react-dom";
import './ProjectDetails.css';
import { Chip } from 'primereact/chip';

interface ProjectDetailsProps {
    title: string;
    description: string;
    img: string[];
    onClose: () => void;
    technologies: string[];
    role: string;
    url?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, description, img, technologies, role, onClose, url }) => {
    const overlayContent = (
        <div className="project-details-overlay">
            <div className="project-details">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{title}</h2>
                <h3>{role}</h3>
                {
                    url && (
                        <div className="url">
                            Lien du site :&nbsp;<strong><a href={url} target="_blank" rel="noreferrer">{url}</a></strong>
                        </div>
                    )
                }
                <div className="img-container">
                    {img.map((img, index) => (
                        <img key={index} src={process.env.PUBLIC_URL + '/img/' + img} alt={title} />
                    ))} 
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
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

    // Render using a portal
    return ReactDOM.createPortal(overlayContent, document.body);
};

export default ProjectDetails;
