

import React from 'react';
import './Header.css'; 

function Header({ theme, toggleTheme }) {
  return (
    <header className={`header-container ${theme}`}>
      <div className="header-section">
        <h1 className="app-title">🎨 ColorCraft</h1>
        <p className="app-tagline">Generate magical palettes with a click or your own color ✨</p>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
      </button>
    </header>
  );
}

export default Header;
