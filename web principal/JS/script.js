const hamburger = document .querySelector(".hamburger");
const lolamenu = document.querySelector("#menu");
const cerrar = document.querySelector(".menuhbg-cerrar");

hamburger.addEventListener("click", function() {
  lolamenu.classList.toggle("active"); 
})

