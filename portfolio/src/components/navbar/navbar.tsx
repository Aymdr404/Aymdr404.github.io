import React from "react";
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <ul className="navbarList">
            <div className="navbarLink">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About-me">About me</a>
                </li>
                <li>
                    <a href="/About-me">Project</a>
                </li>
            </div>
        </ul>
    </nav>
  );
}

export default Navbar;
