// Créer un événement au scroll
console.log(imgImprovise);
window.addEventListener("scroll", () => {
  // Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  // Faire apparaitre l'image de la partie improvise
  /*   console.log(document.body.offsetHeight); // pour recuperer la longuer de la page */
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight; // pour recuperer le pourcentage

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  // Faire apparaitre la popup quand on est en bas du site
  if (scrollValue > 0.85) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
  }
  // Bonus : quand on clicke sur la popup elle disparait pour toujours
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(500px)";
    popup.style.visibility = "hidden";
  });
});

const parallax = document.getElementById("parallax")


