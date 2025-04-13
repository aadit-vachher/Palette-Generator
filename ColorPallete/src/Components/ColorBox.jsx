import React, { useState } from 'react';
import './ColorBox.css';

function ColorBox({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleCopy}
    >
      <span className="color-code">{color}</span>
      {copied && <span className="copied-text">Copied!</span>}
    </div>
  );
}

export default ColorBox;
