let sketchBoxWidth = document.querySelector('.sketchBox').clientWidth;
let setColour = document.querySelector('.setColour').getAttribute('value');
let squares = document.querySelectorAll('.square');
let toggleDraw;
document.onmousedown = () => { toggleDraw = true; }
document.onmouseup = () => { toggleDraw = false; }


// -- Event listeners -- //
document.querySelector('.setColour').addEventListener('change', (e) => {
  squares.forEach(e => {
  e.removeEventListener('mouseenter', randomColour);
  });
  setColour = e.target.value;
});
document.querySelector('.btnEraser').addEventListener('click', () => {
  squares.forEach(e => {
    e.removeEventListener('mouseenter', randomColour);
    });
  setColour = '#F2F2F2';
});
document.querySelector('.btnRainbow').addEventListener('click', () => {
  squares.forEach(e => {
    e.addEventListener('mouseenter', randomColour);
  });
});
document.querySelector('.btnReset').addEventListener('click', resetGrid);
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
document.querySelector('#footer').addEventListener('click', () => {
  window.open('https://github.com/laur-ns/TOP-etch-a-sketch');
});
// -- -- //

setSquareListener();
setSquares(16);

// -- functions -- //
function randomColour(colour) {
  if (!toggleDraw) { return }
  colour.target.style.backgroundColor = 
    `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
function resetGrid() {
  squares.forEach(e => {
    e.style.backgroundColor = '#F2F2F2';
  });
}
function setSquareListener() {
  squares.forEach(e => {
    e.addEventListener('mouseenter', (e) => {
      if (!toggleDraw) { return}
      e.target.style.backgroundColor = `${setColour}`
    });
  });
}
function setSquares(numOfRowSquares) {
  squares.forEach(e => {
    e.remove()
  });
  let square = document.createElement('div');
  let parentNode = document.querySelector('.sketchBox');
  square.setAttribute('class', 'square')
  totalSquares = numOfRowSquares * numOfRowSquares;
  for (let i = 0; i < totalSquares; i++) {
    parentNode.appendChild(square.cloneNode());
  }
  let squareWidth = Math.trunc(sketchBoxWidth / numOfRowSquares);
  squares = document.querySelectorAll('.square');
  squares.forEach(e => {
    e.style.width =`${squareWidth}px`;
    setColour = '#333333';
  });
  setSquareListener();
}
// -- -- //