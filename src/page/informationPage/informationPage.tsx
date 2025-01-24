import React from "react";
import './informationPage.css';


import SkillDescription from "../../components/skillDescription/skillDescription.tsx";


const InformationPage = () => {
    return (
        <div className="informationPage">
            <h1>Compétences professionnel</h1>
            <section className="skill">
                <SkillDescription title="React" description="J'ai commencé à utiliser React dans le personnel afin de développer de petits projets comme ce portfolio. Pour ensuite le proposer comme solutions technologique permettant de créer une IHM." pourcentage={85} />
                <SkillDescription title="NodeJs" description="Surtout utilisé pour développer un backend discutant avec une carte éléctronique en réseau. NodeJs m'a permis offert beaucoup de possibilité durant mes anciens projets" pourcentage={76} />
                <SkillDescription title="Python" description="Ayant utilisé python pour du backend lors de mon alternance. J'ai pu apprendre toutes les facettes de cette technologie étant énormement utilisé par les entreprises" pourcentage={90} />
                <SkillDescription title="PHP" description="PHP est un langage de programmation utilisé pour le développement web" pourcentage={60} />

            </section>
        </div>
    );
};


export default InformationPage;