const FoodDetails = (foods) => {
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.innerHTML = "";
  detailContainer.classList.toggle("hidden");
  foods.forEach((food) => {
    detailContainer.innerHTML = `
        <div class="details w-full sm:w-4/5 lg:w-8/12 rounded-2xl h-full mx-auto bg-white grid grid-cols-1 md:grid-cols-3 p-6 gap-6 relative overflow-y-scroll" id=${food.idMeal}>
          <div class="w-40 h-40 md:w-full md:h-fit mx-auto">
              <img src=${food.strMealThumb} alt=${food.strMeal} title=${food.strMeal} class="rounded-xl w-full h-full object-cover">
          </div>
          <div class="text-secondary col-span-2 text-sm">
              <h1 class="text-2xl font-semibold mb-2">${food.strMeal} <span class="text-lg ">(${food.strArea})</span></h1>
              <p class="font-medium mb-2">Category : <span class="font-normal">${food.strCategory}</span></p>
              <p >${food.strInstructions}</p>
              <div class="tags mt-3">
                  <p class="font-medium">Tags : <span class="font-normal">${food.strTags}</span></p>
              </div>
          </div>
          <div class="fixed top-4 right-4 bg-text rounded-full">
          <img src="../assets/close.svg" alt="close button" class="close-button w-8 cursor-pointer">
          </div>
      </div>`;
  });

  const closeBtn = document.querySelector(".close-button");
  closeBtn.addEventListener("click", function () {
    detailContainer.classList.toggle("hidden");
  });
};

export default FoodDetails;
