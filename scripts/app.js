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

//FAQ
const allCross = document.querySelectorAll(".panneau-visible img");
console.log(allCross);

allCross.forEach((logo) => {
  logo.addEventListener("click", function () {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.parentNode.childNodes[3];

    if (this.src.includes("plus")) {
      this.src = "./ressources/moins.png";
      currentChoice.style.height = height + 40 + "px";
      currentChoice.style.opacity = 1;
      currentChoice.style.padding = "20px 15px";
    } else {
      this.src = "./ressources/plus.png";
      currentChoice.style.height = 0;
      currentChoice.style.opacity = 0;
      currentChoice.style.padding = "0px 15px";
    }
  });
});
