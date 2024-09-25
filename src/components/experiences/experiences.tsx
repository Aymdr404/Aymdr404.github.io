import React, { useState, useEffect } from "react";
import './experiences.css'
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";  // Importer le composant Avatar

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    info?: string;
}

const Experience: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1300);
    const [isAvatar, setIsAvatar] = useState<boolean>(window.innerWidth < 1300);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1300);
            setIsAvatar(window.innerWidth < 1300);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const events: TimelineEvent[] = [
        { status: 'Objectif-Pi', date: 'Août 2023 => Août 2024', color: '#9C27B0', image: 'logo_OP.png', info:'Développeur backend en alternance' },
        { status: 'Remedee-labs', date: 'Avril 2023 => Juin 2023', color: '#673AB7', image:'Logo_RemedeeLabs.png', info:'Developpeur front end, réalisation d\'une web app de gestion de compte client ' },
        { status: 'BUT informatique', date: 'Septembre 2021 => Juillet 2024', color: '#FF9800', image:'logo_BUT.png', info:'Formation en alternance chez Objectif-Pi' }
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
                {/* Bascule entre une image normale et un avatar selon la taille de la fenêtre */}
                { item.image && (
                    isAvatar ? 
                    <Avatar 
                        image={process.env.PUBLIC_URL + `/img/${item.image}`} 
                        shape="circle" 
                        size="large" 
                        className="shadow-1" 
                    /> 
                    : 
                    <img 
                        src={process.env.PUBLIC_URL + `/img/${item.image}`} 
                        alt={item.status} 
                        className="shadow-1 imagePanel" 
                    />
                )}
                <p>{item.info}</p>
            </Card>
        );
    };

    return(
        <div className="cardTimeline">
            <Timeline 
                value={events} 
                align={isMobile ? undefined : "alternate"} 
                className="customized-timeline" 
                marker={customizedMarker} 
                content={customizedContent} 
            />
        </div>
    );
}

export default Experience;
