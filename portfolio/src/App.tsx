import React, { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import About from './About/about';
import Navbar from './navbar/navbar';

import './App.css';
import logo from './logo.svg';

function App() {
  const darkMode = useContext(DarkModeContext);
  localStorage.setItem("darkmode", darkMode.toString());

  return (
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <header className="App-header">
          <Navbar />  
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About-me" element={<About />} />
          </Routes>
        </header>
      </div>
  );
}

export default App;
