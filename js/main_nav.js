let overlay = document.getElementById("main-nav");

let navBurguer = document.getElementById("main-nav__burguer");

let overlayMenu = document.getElementById("main-nav__menu-items");

navBurguer.addEventListener("click", function () {
  this.classList.toggle("burguer-animation");
  overlay.classList.toggle("main-nav--overlay");
  overlayMenu.classList.toggle("main-nav__menu-items-animation");

  if (window.scrollY === 0) {
    overlay.classList.toggle("main-nav--colored");
  }
});

window.addEventListener("scroll", function () {
  window.scrollY >= 80 ? overlay.classList.add("main-nav--colored") : overlay.classList.remove("main-nav--colored");
});