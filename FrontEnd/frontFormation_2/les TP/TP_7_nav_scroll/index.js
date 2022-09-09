// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
lasteScroll = 0;
nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY < lasteScroll) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-60px";
  }

  lasteScroll = window.scrollY;
});
