import CategoriesSource from "../data/getCategories";
import areaSource from "../data/getAreas";
const main = () => {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
    document.body.classList.toggle("active");
  });

  document.addEventListener("DOMContentLoaded", () => {
    CategoriesSource();
    areaSource();
  });
};

export default main;
