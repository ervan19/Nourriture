const axios = require("axios");
import FoodDetails from "../components/foodDetails";
const getDetailsFood = async (id) => {
  const urlBase = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  try {
    const response = await axios.get(`${urlBase}${id}`);
    const resData = await response.data.meals;
    FoodDetails(resData);
  } catch (error) {
    console.log(error);
  }
};

export default getDetailsFood;
