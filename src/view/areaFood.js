import getFoodByArea from "../data/getFoodbyArea";

const areaFood = () => {
  let urlParams = new URLSearchParams(document.location.search);
  let infoUrl = urlParams.get("area");
  const textHeading = document.querySelector(".text-heading");
  textHeading.innerText = infoUrl;
  getFoodByArea();
};

export default areaFood;
