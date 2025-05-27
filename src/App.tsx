import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Page imports
import Navbar from './components/navbar/navbar.tsx';
import Home from './pages/Home/Home.tsx';
import Skills from './pages/Skills/Skills.tsx';
import Experience from './pages/Experience/Experience.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Contact from './pages/Contact/Contact.tsx';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Empty dependency array

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            {<Route path="/contact" element={<Contact />} />}
          </Routes>
        </main>
        <div
          className={`cursor-follower ${isVisible ? 'visible' : ''}`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        />
      </div>
    </Router>
  );
}

export default App;
