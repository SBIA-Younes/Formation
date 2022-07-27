// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

const navbarToggle = document.querySelectorAll("[data-nav-toggler]");

const navLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarToggle.length; i++) {
  navbarToggle[i].addEventListener("click", () => {
    side_bar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    side_bar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
