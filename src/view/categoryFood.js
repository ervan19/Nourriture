import getFoodByCategories from "../data/getFoodByCategories";
const categoryFood = () => {
  let urlParams = new URLSearchParams(document.location.search);
  let infoUrl = urlParams.get("categories");
  const textHeading = document.querySelector(".text-heading");
  textHeading.innerText = infoUrl;
  getFoodByCategories();
};

export default categoryFood;
