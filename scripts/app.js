// Navbar animée
const btnNav = document.querySelector(".responsive-nav-btn");
const listeNav = document.querySelector("nav ul");

let imgBtn = document.querySelector(".responsive-nav-btn img");
btnNav.addEventListener("click", () => {
  listeNav.classList.toggle("active-nav");
  if (imgBtn.src.includes("menu")) {
    imgBtn.src = "./ressources/croix.png";
    imgBtn.style.width = "20px";
  } else {
    imgBtn.src = "./ressources/menu.png";
    imgBtn.style.width = "30px";
  }
});
