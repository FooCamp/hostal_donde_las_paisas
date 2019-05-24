let overlay = document.getElementById("main-nav");

let navBurguer = document.getElementById("main-nav__burguer");

let overlayMenu = document.getElementById("main-nav__menu-items");

navBurguer.addEventListener("click", function () {
	this.classList.toggle("burguer-animation");
});

navBurguer.addEventListener("click", function () {
	overlay.classList.toggle("main-nav-overlay__animation");
});

navBurguer.addEventListener("click", function () {
	overlayMenu.classList.toggle("main-nav__menu-items__animation");
});

window.addEventListener("scroll", function () {
	if (window.scrollY >= 80) {
		overlay.classList.add("colored__main-nav");
	}
	else {
		overlay.classList.remove("colored__main-nav");
	}
});
