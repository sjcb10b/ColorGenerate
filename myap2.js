function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// choose the colors
let y = [
  ["#F2F3EC", "#F48454", "#A06466", "#A7938F", "#372E3E"],
  ["#F4F8F3", "F3A2A3", "#F8BD9E", "#E29598", "#E06557"],
  ["#F5F6F4", "#396FE5", "#36CDA4", "#535A88", "#272446"],
  ["#EEF3F5", "#EFB4C3", "#E18B66", "#9D3B4F", "#372E34"],
  ["#F3F8F6", "#F0C4B5", "#EAAAA5", "#F8BBA1", "#E85E61"],
  ["#D9EAE5", "#E99059", "#6DA0A9", "#B05A50", "#224554"],
  ["#F7F5F7", "#E88D22", "#AEBBCF", "#7C47D5", "#373B89"],
  ["#E6E6DF", "#39BBD2", "#505281", "#2A99D6", "#212422"],
  ["#F2F2F1", "#9E957C", "#A59A8E", "#8E7E75", "#525459"],
  ["#F1F0F4", "#7D6BA7", "#7F88C4", "#6F5195", "#252248"],
];

console.log(y);

let button = document.getElementById("button"); // change color background
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");

let box55 = document.getElementById("box55");
let box55f = document.getElementById("box55f");

let newnav = document.getElementById("newnav");
let titlemain = document.getElementById("titleMain");

let titleHeading = document.getElementById("titleHeading");
let titleHeading2 = document.getElementById("titleHeading2");

let titleaboutme = document.getElementById("titleaboutme");

let titleaboutme2 = document.getElementById("titleaboutme2");

console.log(box55);

button.addEventListener("click", function () {
  //select a random number between 0 - 6
  //let index2 = Math.floor(Math.random() * y.length);
  var index2 = getRandomNumber(0, 9);
  console.log(index2);

  console.log("Test the application  ------");
  //index2 = index2 === 6 ? index2 - 1 : index2;
  console.log(index2);

  box1.style.backgroundColor = `${y[index2][0]}`;
  box2.style.backgroundColor = `${y[index2][1]}`;
  box3.style.backgroundColor = `${y[index2][2]}`;
  box4.style.backgroundColor = `${y[index2][3]}`;
  box5.style.backgroundColor = `${y[index2][4]}`;

  text1.innerHTML = `${y[index2][0]}`;
  text2.innerHTML = `${y[index2][1]}`;
  text3.innerHTML = `${y[index2][2]}`;
  text4.innerHTML = `${y[index2][3]}`;
  text5.innerHTML = `${y[index2][4]}`;

  box55.style.backgroundColor = `${y[index2][4]}`;
  box55f.style.backgroundColor = `${y[index2][4]}`;
  // nav
  newnav.style.backgroundColor = `${y[index2][3]}`;
  // title
  titlemain.style.color = `${y[index2][2]}`;

  titleHeading.style.color = `${y[index2][2]}`;
  titleHeading2.style.color = `${y[index2][2]}`;

  titleaboutme.style.color = `${y[index2][1]}`;
  titleaboutme2.style.color = `${y[index2][1]}`;
  console.log(`${y[index2][0]}`);
});
