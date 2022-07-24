// Créer un événement au scroll
console.log(imgImprovise);
window.addEventListener("scroll", () => {
  // Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
  if (window.scrollY) {
    navbar.style.height = "50px";
  } else if (window.scrollY == 0) {
    navbar.style.height = "90px";
  }
  // Faire apparaitre l'image de la partie improvise
  if (window.scrollY >= 200) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  }
  // Faire apparaitre la popup quand on est en bas du site
  if (window.scrollY >= 1217) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0)";
  }

  // Bonus : quand on clicke sur la popup elle disparait pour toujours
  closeBtn.addEventListener(
    "click",
    () => {
      popup.style.opacity = "0";
      popup.style.visibility = "hidden";
    },
    false
  );
});
