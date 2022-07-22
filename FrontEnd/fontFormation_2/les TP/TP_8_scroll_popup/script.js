// Créer un événement au scroll

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY) {
    navbar.style.height = "50px";
  } else if (window.scrollY == 0) {
    navbar.style.height = "90px";
  }
});

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
