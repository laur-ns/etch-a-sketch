let sketchBoxWidth = document.querySelector('.sketchBox').clientWidth;
let setColour = document.querySelector('.setColour').getAttribute('value');
// -- Event listeners -- //
document.querySelector('.setColour').addEventListener('change', (e) => {
  setColour = e.target.value;
});
let squares = document.querySelectorAll('.square');
function setSquareListener() {
  squares.forEach(e => {
    e.addEventListener('mousemove', (e) => {
      e.target.setAttribute('style', `background-color: ${setColour};`);
    });
  });
}
// -- -- //
setSquareListener();
document.querySelector('.btnEraser').addEventListener('click', () => {
  setColour = '#F2F2F2';
});
document.querySelector('.btnRainbow').addEventListener('click', () => {
  setColour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});