import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          Learn React
      </header>
    </div>
  );
}

export default App;
