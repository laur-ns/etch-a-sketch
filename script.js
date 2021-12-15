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
document.querySelector('.btnReset').addEventListener('click', () => {
  squares.forEach(e => {
    e.setAttribute('style', 'background-color: #F2F2F2');
  });
});
document.querySelector('.btnGrid').addEventListener('click', () => {
  let size = prompt('Enter the number of squares for each row');
  if (size === null) { return; }
  size = parseInt(size);
  while (isNaN(size)) {
    size = prompt('That is not a number! Try again');
    if (size == null) { return }
  }
  setSquares(parseInt(size));
});
// -- -- //

setSquareListener();


// -- functions -- //
function randomColour(colour) {
  colour.target.setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
}
function setSquareListener() {
  squares.forEach(e => {
    e.addEventListener('mousemove', (e) => {
      e.target.setAttribute('style', `background-color: ${setColour};`);
    });
  });
}
function setSquares(numOfRowSquares) {
  squares.forEach(e => {
    e.remove()
  });
}
// -- -- //