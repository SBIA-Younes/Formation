
const menu = document.querySelector(".liste-nav");
const btn_menu = document.querySelector(".btn-toggle-container");


btn_menu.addEventListener("click", function() {
    menu.classList.toggle("active-menu")
})