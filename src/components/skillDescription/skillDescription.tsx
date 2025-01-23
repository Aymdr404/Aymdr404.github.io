import React from "react";
import './skillDescription.css';



import { Slider } from 'primereact/slider';


interface SkillDescriptionProps {
    title: string;
    description: string;
    pourcentage: number;
}


const SkillDescription: React.FC<SkillDescriptionProps> = ({title, description, pourcentage}) => {

    return (
        <div className="skillDescription">
            <section className="skillDescription_title">
                <h3>{title}</h3>
                <div>
                    <p>{pourcentage} %</p>
                </div>
            </section>
            <p className="description">{description}</p>
            <div>
                <Slider value={pourcentage} />
            </div>
        </div>
    );
}

export default SkillDescription;