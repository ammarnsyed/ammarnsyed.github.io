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
  
function formHandler(){
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
    // prevent the default form submission behavior
    event.preventDefault();

    // perform form validation
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        // display an error message
        alert('Please fill out all fields before submitting the form.');
    } 
    else {
        // submit the form
        form.submit();
    }
});
}

swapColorPalettes();
formHandler();
