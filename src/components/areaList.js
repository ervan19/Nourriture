const areaList = (areas) => {
  const areasContainer = document.querySelector(".areas-container");
  areasContainer.innerHTML = "";
  areas.forEach((area) => {
    areasContainer.innerHTML += `
        <div class="w-full text-center ">
             <a href="/foodbyarea.html?area=${area.strArea}" class="text-sm md:text-base lg:text-lg font-semibold hover:text-primary transition-all delay-75 ease-in">${area.strArea}</a>
        </div>
        `;
  });
};

export default areaList;
