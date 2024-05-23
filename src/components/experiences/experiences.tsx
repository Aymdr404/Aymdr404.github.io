import React from "react";
import './experiences.css'
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";


interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    info?: string;
}

const Experience: React.FC = () => {

    const events: TimelineEvent[] = [
        { status: 'Objectif-Pi', date: 'Août 2023 => Août 2024', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'logo_OP.png', info:'Alternant développeur back end sur un ERP.' },
        { status: 'Remedee-labs', date: 'Avril 2023 => Juin 2023', icon: 'pi pi-cog', color: '#673AB7', image:'Logo_RemedeeLabs.png', info:'Developpeur front end, réalisation d\'une web app de gestion de compt client ' },
        { status: 'BUT informatique', date: 'Septembre 2021 => Juillet 2024', icon: 'pi pi-shopping-cart', color: '#FF9800', image:'logo_BUT.png', info:'Formation en alternance chez Objectif-Pi' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`./img/${item.image}`} alt={item.status} className="shadow-1 imagePanel" />}
                <p>{item.info}</p>
            </Card>
        );
    };

    return(
        <div className="cardTimeline">
            <Timeline value={events} align="alternate"  className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}

export default Experience;