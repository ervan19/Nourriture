const axios = require("axios");
import listByCategories from "../components/listByCategories";
const getFoodByCategories = async () => {
  let urlParams = new URLSearchParams(document.location.search);
  let infoUrl = urlParams.get("categories");
  const urlBase = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  try {
    const response = await axios.get(`${urlBase}${infoUrl}`);
    const resData = await response.data.meals;
    listByCategories(resData);
  } catch (error) {
    console.log(error);
  }
};

export default getFoodByCategories;
