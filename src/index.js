document.addEventListener('DOMContentLoaded',function(){
  // dropdown
  document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("visible")
    }

    document.querySelectorAll("[data-dropdown].visible").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("visible")
    })
  })
  // dropdown
  // burger
   var burgerBtn = document.getElementById('burger-btn');
   var overlay = document.getElementById('burger-menu');
   burgerBtn.addEventListener('click', function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
   });
  // burger
  //search
  var fakeSearchBtn = document.getElementById('fakeSearchBtn');
  var searchBtn = document.getElementById('searchBtn');
  var inputSearch = document.getElementById('inputSearch');
  var logo = document.getElementById('logo');
  var searchOverlay = document.getElementById('searchOverlay');
  fakeSearchBtn.addEventListener('click', function(){
    if (window.innerWidth <= 1100) {
      inputSearch.classList.toggle("visible");
      searchBtn.classList.toggle("visible");
      fakeSearchBtn.classList.toggle("hide");
    }
     if (window.matchMedia("(min-width: 577px)").matches && window.matchMedia("(max-width: 992px)").matches) {
      burgerBtn.classList.toggle("hide");
      logo.classList.toggle("hide");
    } 
    if (window.matchMedia("(min-width: 320px)").matches && window.matchMedia("(max-width: 576px)").matches) {
      searchOverlay.classList.toggle("overlay");
    }
    inputSearch.focus();
  })
  //search
  // custom scroll
      document.querySelectorAll('.dropdown-item__content').forEach(item => {
        new SimpleBar(item, {
          autoHide: false,
          scrollbarMinSize: 28,
          scrollbarMaxSize: 28
        }); 
      });
  // custom scroll
  // custom select gallery
      const element = document.querySelector('#selectCustom');
      const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: ""
      });
  // custom select gallery
  // swiper gallery
      var swiper = new Swiper(".gallery__swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 50,
        pagination: {
          el: ".gallery-swiper__pagination",
          clickable: true,
          type: "fraction",
        },
        navigation: {
          nextEl: '.gallery-swiper__arrow-next',
          prevEl: '.gallery-swiper__arrow-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            grid: {
              rows: 1
            },
            spaceBetween: 0
          },
          576: {
            slidesPerView: 2,
            grid: {
              rows: 2
            },
            spaceBetween: 30
          },
      
          1200: {
            slidesPerView: 3,
            grid: {
              rows: 2
            },
            spaceBetween: 50
          }
        },
      
        a11y: {
          prevSlideMessage: 'Предыдущий',
          nextSlideMessage: 'Следующий',
        },
          on: {
    /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  },
      });
  // swiper gallery
  // swiper hero
      var heroSwiper = new Swiper(".hero__swiper", {
        loop: true,
        effect: "fade",
        noSwiping: true,
        autoplay: {
          delay: 3000,
        },

      });
  // swiper hero
});