let body = document.body;

let overlay = document.getElementById("main-nav");

let navBurguer = document.getElementById("main-nav__burguer");

let overlayMenu = document.getElementById("main-nav__menu-items");

let logoElement = document.querySelector(".homepage-hero__logo");
let logoHeight = logoElement.offsetHeight;
let logoTop = logoElement.offsetTop;


navBurguer.addEventListener("click", function () {
  this.classList.toggle("burguer-animation");
  overlay.classList.toggle("main-nav--overlay");
  overlayMenu.classList.toggle("main-nav__menu-items-animation");
  body.classList.toggle("non-scroll");

  if (window.scrollY === 0) {
    overlay.classList.toggle("main-nav--colored");
  }
});

window.addEventListener("resize", function () {
  logoHeight = logoElement.offsetHeight;
  logoTop = logoElement.offsetTop;
  window.scrollY >= logoHeight + logoTop ? overlay.classList.add("main-nav--colored") : overlay.classList.remove("main-nav--colored");
});

window.addEventListener("scroll", function () {
  window.scrollY >= logoHeight + logoTop ? overlay.classList.add("main-nav--colored") : overlay.classList.remove("main-nav--colored");
});


