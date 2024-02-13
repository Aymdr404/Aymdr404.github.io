import React from "react";
import "./navbar.css";

function Navbar() {
  
  return (
    <nav className="navbar">
        <ul className="navbarList">
            <div className="navbarLink">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Project</a>
                </li>
            </div>
            <div className="navbarTheme">
                <button>Toggle Theme</button>
            </div>            
        </ul>
    </nav>
    );
}

export default Navbar;