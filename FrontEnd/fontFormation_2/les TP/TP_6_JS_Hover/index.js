// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const cursor = document.querySelector(".rond1");
const rond1 = document.querySelector(".rond2");
const rond2 = document.querySelector(".rond3");

window.addEventListener("mousemove", (event) => {
  if (event.target.localName == "a") {
    cursor.style.background = "none";
  } else {
    cursor.style.background = "#2128bd";
    cursor.style.top = event.pageY + "px";
    cursor.style.left = event.pageX + "px";
  }

  rond1.style.top = event.pageY + "px";
  rond1.style.left = event.pageX + "px";
  rond2.style.top = event.pageY + "px";
  rond2.style.left = event.pageX + "px";
});
