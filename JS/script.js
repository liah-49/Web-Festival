const hamburger = document .querySelector(".hamburger");
const lolamenu = document.querySelector(".lolamenu");
// Asociamos al elemento que hemos selccionado un evento click
hamburger.addEventListener("click", function() {
    console.log ("Con esto podemos mandar mensajitos a la consola");

  lolamenu.classList.toggle("active"); 
})