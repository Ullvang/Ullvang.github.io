var mainNav = document.getElementById("mainNav");
var navToggle = document.getElementById("navToggle");

mainNav.classList.add("collapsed");

function mainNavToggle() {
  mainNav.classList.toggle("collapsed");
  navToggle.classList.toggle("navbar-toggle");
}

navToggle.addEventListener("click", mainNavToggle);
