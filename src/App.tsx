import React, { useState, useEffect } from 'react';
import './App.css';

// Page imports
import Navbar from './components/navbar/navbar.tsx';
import Home from './pages/Home/Home.tsx';
import Skills from './pages/Skills/Skills.tsx';
import Experience from './pages/Experience/Experience.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Contact from './pages/Contact/Contact.tsx';
import Freelance from './pages/Freelance/Freelance.tsx';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="global-parallax-bg" aria-hidden="true">
        <div
          className="bg-layer bg-layer-1"
          style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0)` }}
        />
        <div
          className="bg-layer bg-layer-2"
          style={{ transform: `translate3d(0, ${scrollY * -0.18}px, 0)` }}
        />
        <div
          className="bg-layer bg-layer-3"
          style={{ transform: `translate3d(0, ${scrollY * 0.28}px, 0)` }}
        />
      </div>
      <main className="main-content">
        <section id="home" className="scroll-section onepage-section">
          <Home />
        </section>
        <section id="skills" className="scroll-section onepage-section">
          <Skills />
        </section>
        <section id="experience" className="scroll-section onepage-section">
          <Experience />
        </section>
        <section id="projects" className="scroll-section onepage-section">
          <Projects />
        </section>
        <section id="freelance" className="scroll-section onepage-section">
          <Freelance />
        </section>
        <section id="contact" className="scroll-section onepage-section">
          <Contact />
        </section>
      </main>
      <div
        className={`cursor-follower ${isHovering ? 'visible' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </div>
  );
}

export default App;
