


import React, { useState } from 'react';
import './ColorInput.css';

function ColorInput({ onSubmit }) {
  const [selectedColor, setSelectedColor] = useState('#3498db');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleGenerate = () => {
    onSubmit(selectedColor); 
  };

  return (
    <div className="color-input-container">
      <div className="color-label">
        <label htmlFor="colorPicker">Pick a Color:</label>
        <input
          id="colorPicker"
          type="color"
          value={selectedColor}
          onChange={handleChange}
          className="color-picker"
        />
      </div>
      <button className="color-generate-button" onClick={handleGenerate}>
        Generate AI Palette
      </button>
    </div>
  );
}

export default ColorInput;
