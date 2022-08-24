// SELECTEURS

// document.querySelector('h4').style.background = 'green'

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const afficheP = document.querySelector(".box p");
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  afficheP.classList.add("show-afficheP");
  afficheP.style.background = "green";
  console.log(afficheP);
});
btn2.addEventListener("click", () => {
  afficheP.classList.add("show-afficheP");
  afficheP.style.background = "red";
});

// -------------------------------------------------------------

// Mouse Event
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "1px solid teal";
});
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "blue";
});
afficheP.addEventListener("mouseover", () => {
  afficheP.style.transform = "rotate(2deg)";
});

// -----------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (keyy) => {
  const audio = new Audio();
  audio.src = keyy + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") keypressContainer.style.background = "green";
  else keypressContainer.style.background = "red";
  if (e.key === "z") ring(e.key);
});

// --------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else nav.style.top = "-50px";
});

// --------------------------------------------
// Form Events
const inputName = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo;
let language;

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("change", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// -----------------------------------------------------
// Load event
window.addEventListener("load", () => {
  // console.log("Document Chagé !");
});

// -----------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e.target);
    // e.target.style.transform = "scale(0.7)";
  });
});

// ----------------------------------------
// addEventListener Vs onclick

// document.body.onclick = () => {
//   console.log("click");
// }

// Bubbling => fin (de base l'eventListener est paramétré en mode Bubbling)
document.addEventListener(
  "click",
  () => {
    // console.log("click 1 !");
  },
  false
);

// Usecapture => debut (l'eventListener n'est pasparamétré en mode Bubbling alors il faut metre au 3eme parametre true)
document.addEventListener(
  "click",
  () => {
    // console.log("click 2 !");
  },
  true
);

// ------------------------------------------
// Stop propagation

questionContainer.addEventListener("click", (e) => {
  // alert("Test !");
  // e.stopPropagation();
});

// -----------------------------------------
// BOM

// console.log(window.innerWidth);

// window.open("http://google.com/", "cours.js", "height-600, width=800")

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  console.log(answer);
});
