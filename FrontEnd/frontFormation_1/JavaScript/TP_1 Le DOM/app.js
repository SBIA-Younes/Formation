let premierTitre = document.getElementsByClassName("premier-titre");

const premierId = document.getElementById('premier-id');

const titreNu = document.querySelector('h3');

const allItems = document.querySelectorAll('.item-liste')

const liste = document.querySelector('ul');



// console.log(premierTitre);
// console.log(premierId);
// console.log(titreNu);
// console.log(allItems);
// console.log(liste.childNodes);

premierTitre = document.querySelector('.premier-titre');
console.log(premierTitre);

// premierTitre.style.background = 'red';


premierTitre.innerText = "Text depuis le js";

const parent = document.querySelector('.parent');

parent.innerHTML = "<p>Balise depuis le js</p>"; // il faut une dive

let nvElement = document.createElement("li");
nvElement.innerText = "Nouvel item depuis le JS";
liste.appendChild(nvElement);

liste.children[2].remove();

liste.children[1].replaceWith(nvElement);

const bloc = document.querySelector(".bloc");

bloc.addEventListener("click", ({layerX, layerY}) => {
    console.log(layerX, layerY,"layer");
});
const title = document.querySelector("h1.title");

bloc.addEventListener("mousemove", ({clientX,clientY}) => {
    let posX = clientX;
    let posY = clientY;
    title.innerText = `posX : ${posX}\nposY : ${posY}`
});

window.addEventListener("load", () => {
    console.log("Le site a chargé !");
});

window.addEventListener("DOMContentLoaded",() => {
    console.log("Le DOM entrain de se charger,avont les image");
})