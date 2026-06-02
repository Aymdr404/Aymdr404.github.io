import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'skills', 'experience', 'projects', 'freelance', 'contact'];
      const navOffset = 120;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sectionIds[i]);
        if (section && window.scrollY + navOffset >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'freelance', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          Portfolio
        </a>

        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
