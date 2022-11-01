import getDetailsFood from "../data/getDetailsFood";

const listByCategories = (categories) => {
  const listFood = document.querySelector(".list-food");
  listFood.innerHTML = "";
  categories.forEach((category) => {
    listFood.innerHTML += `
        <div class="w-full category-list cursor-pointer h-full rounded-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] relative group bg-secondary/40 p-4 flex flex-col items-center justify-start gap-6" id=${category.idMeal}>
            <img class="group-hover:scale-105 object-cover transition-all duration-300 ease-in rounded-xl max-w-full " src=${category.strMealThumb} alt=${category.strMeal} title=${category.strMeal}>
            <div class="w-full flex items-center justify-between gap-1 text-left">
                  <h1 class="text-sm md:text-base lg:text-lg font-semibold">${category.strMeal}</h1>
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

export default listByCategories;
