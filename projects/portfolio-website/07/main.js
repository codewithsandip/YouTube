const mainNavContainer = document.querySelector(".main-nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    mainNavContainer.classList.toggle("collapse");
});