import React from 'react';
import Home from './page/home/home.tsx';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
