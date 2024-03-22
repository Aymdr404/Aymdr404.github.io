import React from "react";
import './contactbar.css'

const ContactBar: React.FC = () => {
    return(
        <div className="contactbar">
            <a href="https://www.linkedin.com/in/aymeric-sabatier-3a1b8b1b7/" target="_blank" rel="noreferrer">
                <img src="./img/linkedin.png" alt="linkedin" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
                <img src="./img/github.png" alt="github" />
            </a>
        </div>
    )
}

export default ContactBar;