import getDetailsFood from "../data/getDetailsFood";
const listByAreas = (foods) => {
  const listFoodArea = document.querySelector(".list-food-area");
  listFoodArea.innerHTML = "";
  foods.forEach((food) => {
    listFoodArea.innerHTML += `
        <div class="w-full category-list h-full rounded-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] relative group  bg-secondary/40 p-4 flex flex-col items-center justify-start gap-6 cursor-pointer" id=${food.idMeal}>
            <img class="group-hover:scale-105 object-cover transition-all duration-300 ease-in rounded-xl" src=${food.strMealThumb} alt=${food.strMeal} title=${food.strMeal}>
            <div class="w-full flex items-center justify-between gap-1 text-left">
                  <h1 class="text-sm md:text-base lg:text-lg font-semibold">${food.strMeal}</h1>
            </div>
      </div>
        `;
  });
  const categoryID = document.querySelectorAll(".category-list");
  categoryID.forEach((food) => {
    food.addEventListener("click", () => {
      getDetailsFood(food.id);
    });
  });
};

export default listByAreas;
