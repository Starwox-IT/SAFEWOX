const hamburger = document.querySelector(".ham-menu");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
