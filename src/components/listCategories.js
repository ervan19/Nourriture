const listCategories = (categories) => {
  const categoriesContainer = document.querySelector(".categories-container");
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    categoriesContainer.innerHTML += `
      <a href="/foodbycategory.html?categories=${category.strCategory}" class=" w-full category-list h-full rounded-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] relative group  bg-secondary/40 p-4 flex flex-col items-center justify-start gap-6" id=${category.idCategory}>
          <img class="group-hover:scale-105 object-cover transition-all duration-300 ease-in rounded-xl" src=${category.strCategoryThumb} alt=${category.strCategory} title=${category.strCategory}>
          <div class="w-full flex items-center justify-between gap-1 text-left">
                <h1 class="text-sm md:text-base lg:text-lg font-semibold">${category.strCategory}</h1>
          </div>
    </a>
      `;
  });
};

export default listCategories;
