const navToggle = document.querySelector(".header-mobile__nav--toggle");
const navMenu = document.querySelector(".header-mobile__nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("header-mobile__nav-menu-visible");
});

