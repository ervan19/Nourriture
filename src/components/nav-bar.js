class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <header class=" sticky left-0 top-0 w-full bg-secondary/20 backdrop-blur-xl z-50 ">
      <nav class="w-full px-6 md:px-20 py-8 flex items-center justify-between  relative">
          <div class="logo flex items-center gap-2">
              <div class="w-8 ">
                  <img src="./assets/logo.svg" alt="">
              </div>
              <a href="#body" class="uppercase font-oswald tracking-wide font-bold text-xl text-primary">nourriture</a>
          </div>

          <div class="nav-menu hidden flex items-center w-full min-h-screen md:min-h-full justify-center md:justify-end gap-12 md:gap-8 flex-col md:flex-row absolute right-0 top-0 md:flex  md:static  bg-secondary/90 md:bg-transparent" >

          <ul class="w-full flex items-center justify-center flex-col gap-12 md:gap-4 md:flex-row">
          <li><a href="#body" class="text-base hover:text-primary font-semibold transition-all delay-75">Stories</a></li>
          <li><a href="#about" class="text-base hover:text-primary font-semibold transition-all delay-75">About Us</a></li>
              <li><a href="#categories" class="text-base hover:text-primary font-semibold transition-all delay-75">Category</a></li>
              <li><a href="#areas" class="text-base hover:text-primary font-semibold transition-all delay-75">Areas</a></li>
              <li><a href="#" class="text-base hover:text-primary font-semibold transition-all delay-75">Food</a></li>
          </ul>
          
          <div class=" flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/ervanmuhammad_/" target="blank" class=" w-6 h-6 md:w-5 md:h-5 cursor-pointer text-text group ">
                  <img class="w-full group-hover:scale-125 transition-all delay-75 " src="./assets/instagram.svg"/>
              </a>
              <a href="https://www.linkedin.com/in/ervan-muhammad-adrian-9173a6213/" target="blank" class="  w-6 h-6 md:w-5 md:h-5 cursor-pointer text-text group ">
              <img class="w-full group-hover:scale-125 transition-all delay-75" src="./assets/linkedin.svg"/>
              </a>
              <a href="#" class=" w-6 h-6 md:w-5 md:h-5 cursor-pointer text-text group ">
              <img class="w-full group-hover:scale-125 transition-all delay-75" src="./assets/facebook.svg"/>
              </a>
          </div>
          </div>

          <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 md:hidden">
            <span class="hamburger-line origin-top-left transition-all duration-300 ease-in-out"></span>
            <span class="hamburger-line transition-all duration-300 ease-in-out"></span>
            <span class="hamburger-line origin-bottom-left transition-all duration-300 ease-in-out"></span>
          </button>
      </nav>
      </header>
      `;
  }
}

customElements.define("nav-bar", NavBar);
