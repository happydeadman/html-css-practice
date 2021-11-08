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
     if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 992px)").matches) {
      burgerBtn.classList.toggle("hide");
      logo.classList.toggle("hide");
    } 
    if (window.matchMedia("(min-width: 320px)").matches && window.matchMedia("(max-width: 767px)").matches) {
      searchOverlay.classList.toggle("overlay");
    }
    inputSearch.focus();
  });
  //search
  //resizeHeight
  function resizeBlock () {
    var newHeigth = document.getElementById("header").offsetHeight + document.getElementById("hero").offsetHeight;
    var eventArticle = document.getElementById('event-article');
    document.getElementById("burger-menu").style.height = newHeigth + "px";
    if (window.innerWidth >= 769) {
      eventArticle.classList.remove('hide');
    }
    if (window.matchMedia("(min-width: 320px)").matches && window.matchMedia("(max-width: 768px)").matches) {
      eventArticle.classList.add('hide');
    }
  };
  resizeBlock();
  window.onresize = resizeBlock;
  //resizeHeight
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
          767: {
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
  // accordion
  $( function() {
    $( ".accordion" ).accordion({
      icons: false,
      collapsible: true,
      heightStyle: "content",
    });
  } );
  // accordion

  //catalog tabs

  document.querySelectorAll('.countries__btn').forEach(function(tabBtn) {
    tabBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll("[data-path].active-country").forEach(cBtn => {
        cBtn.classList.remove("active-country")
      })
      this.classList.toggle('active-country')
      document.querySelectorAll('.catalog__artist-block').forEach(function(tabCountry) {
        tabCountry.classList.remove('catalog__artist-block--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-block--active');
      $('.accordion').accordion("refresh");
    });
  });
  //catalog tabs
  //artist tabs
  document.querySelectorAll('.catalog__artist-block').forEach(item => {
    let btns = item.querySelectorAll('.artist-years__btn');
    let articles = item.querySelectorAll('.catalog__artist-descr');
    btns.forEach (el => {
      el.addEventListener ("click", function(e) {
        const path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        articles.forEach (el => {
          el.classList.remove("catalog__artist-descr--active");
        });
        btns.forEach (el => {
          el.classList.remove('artist-years__btn--active')
        });
        tabCont.classList.add('catalog__artist-descr--active');
        this.classList.add('artist-years__btn--active');
      });
    });
  });
  //artist tabs

  //events
  var eventsBtn = document.getElementById('events-btn');
  eventsBtn.addEventListener('click', function () {
    document.querySelectorAll('.events__item').forEach(function(el){
      el.classList.remove('hide');
    });
    eventsBtn.classList.add('hide');
  })
  //events
  //events Swiper
  const eventsSwiper = new Swiper('.events__list--mobile', {

    pagination: {
      el: ".events__swiper-pagination",
      clickable: true,
      type: "bullets",
      bulletActiveClass: "events__swiper-pagination-bullet-active",
      bulletClass: "events__swiper-pagination-bullet",
      clickableClass: "events__swiper-pagination-clickable",
      currentClass: "events__swiper-pagination-current"

    }
  });
  //events Swiper
});