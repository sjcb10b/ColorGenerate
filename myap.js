//Select 7 colors
let colors = ["red", "blue", "green", "orange", "purple", "black", "yellow"];
let colors2 = ["orange", "black", "yellow"];

let colortext = ["red", "blue", "orange"];

console.log(colors);
console.log(colortext);

//change the background of canvas when button is clicked
// find th element
let button = document.getElementById("button"); // change color background
let mycanvas = document.getElementById("canvas"); // change the size of the border also increment the size of the border
let mycanvas2 = document.getElementById("canvas2"); // change the size of the border also increment the size of the border

let mytext = document.getElementById("paragraph"); // change the size and color of the text

console.log(mytext);

button.addEventListener("click", function () {
  //select a random number between 0 - 6
  let index = parseInt(Math.random() * colors.length + 1);
  console.log(" Here is the number :".index);
  //grab the canvas
  let canvas = document.getElementById("canvas");
  let canvas2 = document.getElementById("canvas2");

  canvas.style.background = `${colors[index]}`;
  canvas2.style.background = `${colors2[index]}`;
});

let buttonborder = document.getElementById("buttonborder");

let border2 = 0;
buttonborder.addEventListener("click", function () {
  border2 = border2 + 2;
  console.log(border2);

  console.log(`${border2}px solid #000000`);

  let index2 = parseInt(Math.random() * colors.length + 1);

  mycanvas.style.border = `${border2}px solid ${colors[index2]}`;
});

let sizetext = 10;
let buttontext = document.getElementById("buttontext");
buttontext.addEventListener("click", function () {
  sizetext = sizetext + 2;
  console.log(sizetext);
  mytext.style.fontSize = `${sizetext}px`;
});

 
