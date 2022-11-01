import listCategories from "../components/listCategories";
const axios = require("axios");
const CategoriesSource = async () => {
  const categoriesURL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  try {
    const response = await axios.get(`${categoriesURL}`);
    const resData = await response.data.categories;
    listCategories(resData);
  } catch (error) {
    console.log(error);
  }
};

export default CategoriesSource;
