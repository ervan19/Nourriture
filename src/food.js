import "./styles/style.css";
import "regenerator-runtime/runtime.js";
import "./components/nav-bar";
import categoryFood from "./view/categoryFood.js";
import getDetailsFood from "./data/getDetailsFood";

document.addEventListener("DOMContentLoaded", () => {
  categoryFood();
});
