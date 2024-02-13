import React from "react";
import "./navbar.css";
import LightSwitch from "./toggleTheme";

function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbarList">
                <div className="navbarLink">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about-me">About me</a>
                    </li>
                    <li>
                        <a href="#">Project</a>
                    </li>
                </div>
                <LightSwitch />
            </ul>
        </nav>
    );
}

export default Navbar;