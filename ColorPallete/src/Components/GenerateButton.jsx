import React from 'react';
import './GenerateButton.css'

function GenerateButton({ onClick }) {
  return (
    <button className="generate-button" onClick={onClick}>
      🎨 Generate Random Palette
    </button>
  );
}

export default GenerateButton;
