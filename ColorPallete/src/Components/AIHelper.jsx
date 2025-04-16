export async function getSimilarColors(baseColorHex) {

    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.replace('#', ''), 16);
      return [ (bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255 ];
    };
  
    const rgb = hexToRgb(baseColorHex);
  
    try {
      const response = await fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
          input: [rgb, "N", "N", "N", "N"]
        })
      });
  
      const data = await response.json();
  

      const rgbToHex = (rgb) =>
        "#" +
        rgb.map((val) => val.toString(16).padStart(2, '0')).join('');
  
      const hexColors = data.result.map(rgbToHex);
      return hexColors;
    } catch (err) {
      console.error("Error getting Colormind colors:", err);
      return [];
    }
  }
  