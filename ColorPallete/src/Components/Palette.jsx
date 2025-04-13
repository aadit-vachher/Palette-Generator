import React, { useState, useEffect } from 'react'; 
import './Palette.css';
import ColorBox from './ColorBox';
import GenerateButton from './GenerateButton';
import ColorInput from './ColorInput';
import { getSimilarColors } from './AIHelper';



function Palette({ theme, loading, setLoading }) {
  const [colors, setColors] = useState([]);

  const [paletteName, setPaletteName] = useState('');

  const generateAIPalette = async (hexColor) => {
    setLoading(true);
    try {
      console.log("Selected Color:", hexColor);
      const aiColors = await getSimilarColors(hexColor);
      console.log("AI Colors Returned:", aiColors);
      setColors(aiColors);
  
      const aiName = generatePaletteName(); 
      setPaletteName(aiName);               
    } catch (err) {
      console.error("AI color generation failed:", err);
    }
    setLoading(false);
  };
  
  


  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const generatePaletteName = () => {
    const keywords = ['Dream', 'Sunset', 'Ocean', 'Neon', 'Vintage', 'Pop', 'Frost', 'Forest', 'Candy', 'Galaxy','Dark'];
    const suffixes = ['Vibes', 'Tones', 'Glow', 'Mood', 'Mix', 'Rush', 'Palette','Venture'];

    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${randomKeyword} ${randomSuffix}`;
  };


  const generatePalette = () => {
    setLoading(true);
    setTimeout(() => {
      const newColors = [];
      for (let i = 0; i < 5; i++) {
        newColors.push(generateRandomColor());
      }
      setColors(newColors);

      const aiName = generatePaletteName(newColors);
      setPaletteName(aiName);

      setLoading(false);
    }, 700); 
  };


  useEffect(() => {
    generatePalette();
  }, []);

  return (

    <div className={`palette-container ${theme}`}>
      <GenerateButton onClick={generatePalette} />
      


      {loading ? (
        <p className="loader-text">🤖 Generating Palette & AI Name...</p>
      ) : (
        <>
          <h2 className="palette-name">{paletteName}</h2>
          <div className="color-row">
            {colors.map((color, index) => (
              <ColorBox key={index} color={color} />
            ))}
          </div>

        </>
      )}
      <ColorInput onSubmit={generateAIPalette} />

    </div>
  );
}

export default Palette;

