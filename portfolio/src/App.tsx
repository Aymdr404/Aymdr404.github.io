import React from 'react';
import Home from './page/home/home.tsx';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const App: React.FC = () => {
  return (
    
    <div className="App">
      <header className="App-header">
        <PrimeReactProvider>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </PrimeReactProvider>
      </header>
    </div>
  );
}

export default App;
