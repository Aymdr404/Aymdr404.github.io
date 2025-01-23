import React, { useState, useEffect } from 'react';
import Home from './page/home/home.tsx';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY }); // Utilisation de pageX et pageY
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App" style={{ position: 'relative' }}>
      <header className="App-header">
        <PrimeReactProvider>
          <Home />
        </PrimeReactProvider>
      </header>
      {/* Élement qui suit la souris */}
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y,
          left: mousePosition.x,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '2px solid white',
          zIndex: 1000
        }}
      />
    </div>
  );
}

export default App;
