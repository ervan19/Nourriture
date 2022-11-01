import areaList from "../components/areaList";
const axios = require("axios");
const areasSource = async () => {
  const areaURL = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
  try {
    const response = await axios.get(`${areaURL}`);
    const resData = await response.data.meals;
    areaList(resData);
  } catch (error) {
    console.log(error);
  }
};

export default areasSource;
