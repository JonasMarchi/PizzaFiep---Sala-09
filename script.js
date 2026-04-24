const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById('menu');
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    /*quando o botao do menu for clicado o overlay que está escondido fica visivel*/ 
})

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    /*remove o overlay */
});