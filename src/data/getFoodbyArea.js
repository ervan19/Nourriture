const axios = require("axios");
import listByAreas from "../components/listByAreas";

const getFoodByArea = async () => {
  let urlParams = new URLSearchParams(document.location.search);
  let infoUrl = urlParams.get("area");
  const urlBase = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
  try {
    const response = await axios.get(`${urlBase}${infoUrl}`);
    const resData = await response.data.meals;
    listByAreas(resData);
  } catch (error) {
    console.log(error);
  }
};

export default getFoodByArea;
