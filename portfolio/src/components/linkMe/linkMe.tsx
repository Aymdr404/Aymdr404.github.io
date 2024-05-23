import React from 'react';
import './linkMe.css';
import { SpeedDial } from 'primereact/speeddial';
import { MenuItem } from 'primereact/menuitem';


const LinkMe: React.FC = () => {
    const items: MenuItem[] = [
        {
            label: 'Github',
            icon: 'pi pi-pencil',
            command: () => {
                window.open('https://github.com/Aymdr404', '_blank');
            }
        },
        {
            label: 'Linkedin',
            icon: 'pi pi-external-link',
            command: () => {
                window.open('https://www.linkedin.com/in/aymeric-sabatier-3a1b8b1b7/', '_blank');
            }
        },
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            command: () => {
                window.open('mailto:ssabatieraymeric@gmail.com', '_blank');
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" />
            </div>
        </div>
    )
}

export default LinkMe;