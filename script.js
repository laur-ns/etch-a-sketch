let sketchBoxWidth = document.querySelector('.sketchBox').clientWidth;
let setColour = document.querySelector('.setColour').getAttribute('value');
let squares = document.querySelectorAll('.square');

// -- Event listeners -- //
document.querySelector('.setColour').addEventListener('change', (e) => {
  setColour = e.target.value;
});
document.querySelector('.btnEraser').addEventListener('click', () => {
  squares.forEach(e => {
    e.removeEventListener('mousemove', randomColour);
    });
  setColour = '#F2F2F2';
});
document.querySelector('.btnRainbow').addEventListener('click', () => {
  squares.forEach(e => {
    e.addEventListener('mousemove', randomColour);
  });
});
// -- -- //
setSquareListener();

function randomColour(colour) {
  colour.target.setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
}

// -- functions -- //
function setSquareListener() {
  squares.forEach(e => {
    e.addEventListener('mousemove', (e) => {
      e.target.setAttribute('style', `background-color: ${setColour};`);
    });
  });
}