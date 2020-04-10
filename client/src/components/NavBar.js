import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div className="nav-title">
        <h1>Women's World Cup</h1>
      </div>
      <div className="dark-mode__toggle">
        <button onClick={toggleMode} >Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;