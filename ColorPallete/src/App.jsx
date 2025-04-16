import React, { useState } from 'react';
import Header from './Components/Header';
import Palette from './Components/Palette';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false); 
  

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Palette theme={theme} loading={loading} setLoading={setLoading} />

    </div>
  );
}

export default App;
