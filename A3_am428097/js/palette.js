// Color Palette swap. Uses a conditional and event handlers to change palettes depending on the button pressed
function swapColorPalettes() {
    const palette1Btn = document.getElementById('palette1-btn');
    const palette2Btn = document.getElementById('palette2-btn');
    const palette3Btn = document.getElementById('palette3-btn');
  
    palette1Btn.addEventListener('click', () => {
      document.body.classList.remove('palette2', 'palette3');
      document.body.classList.add('palette1');
      alert("Change to Default Palette")
    });
  
    palette2Btn.addEventListener('click', () => {
      document.body.classList.remove('palette1', 'palette3');
      document.body.classList.add('palette2');
      alert("Change to Pink Palette")
    });
  
    palette3Btn.addEventListener('click', () => {
      document.body.classList.remove('palette1', 'palette2');
      document.body.classList.add('palette3');
      alert("Change to Blue Palette")
    });
  }
  swapColorPalettes();
  