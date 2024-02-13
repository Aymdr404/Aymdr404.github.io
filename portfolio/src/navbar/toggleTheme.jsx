import React, {useContext} from 'react';
import {DarkModeContext} from '../context/DarkModeContext';

function LightSwitch() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }
    return (
        <div>
            <button onClick={handleClick}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
  
}

export default LightSwitch;