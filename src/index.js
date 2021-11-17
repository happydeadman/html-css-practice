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
    document.getElementById("burger-menu").style.height = newHeigth + "px";
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
      el.style.display = "flex";
    });
    this.style.display = "none";
  })
  //events
  //events Swiper
  const slider = document.querySelector('.events__list-container');
  let evSwiper;
  function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
      evSwiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".events__swiper-pagination",
          clickable: true,
          type: "bullets",
          bulletActiveClass: "events__swiper-pagination-bullet-active",
          bulletClass: "events__swiper-pagination-bullet",
          clickableClass: "events__swiper-pagination-clickable",
          currentClass: "events__swiper-pagination-current"
        },
      });
  
      slider.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 767 && slider.dataset.mobile == 'true') {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-initialized')) {
        evSwiper.destroy();
      };
    };
  };
  mobileSlider();
  window.addEventListener('resize', () => {
    mobileSlider();
    initPubSwiper();
  });
  // const eventsSwiper = new Swiper('.events__list-container', {

  //   pagination: {
  //     el: ".events__swiper-pagination",
  //     clickable: true,
  //     type: "bullets",
  //     bulletActiveClass: "events__swiper-pagination-bullet-active",
  //     bulletClass: "events__swiper-pagination-bullet",
  //     clickableClass: "events__swiper-pagination-clickable",
  //     currentClass: "events__swiper-pagination-current"
  //   }
  // });
  //events Swiper
  //publishers Swiper
  const piblishersSwiper = document.querySelector('.publishers__swiper');
  let pubItems = document.querySelectorAll('.publishers__item');

  let pubSwiper;
  function initPubSwiper () {
    if (window.innerWidth > 767 && piblishersSwiper.dataset.mobile == 'true') {
      pubSwiper = new Swiper(piblishersSwiper, {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        slideClass: 'publishers__item',
        pagination: {
          el: '.publishers__pagination',
          clickable: true,
          type: "fraction",
        },
        navigation: {
          nextEl: '.publishers__arrow-next',
          prevEl: '.publishers__arrow-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
      });
      piblishersSwiper.dataset.mobile = 'false';
    };

    if (window.innerWidth <= 767 && piblishersSwiper.dataset.mobile == 'false') {

      if (piblishersSwiper.classList.contains('swiper-initialized')) {
        pubSwiper.destroy();
      };
      piblishersSwiper.dataset.mobile = 'true';
    }
  };
  initPubSwiper();
  //publishers Swiper
  //pub checkbox mobile
  let pubBtn = ".categories__title";
  let labels = ".checkbox-label";
  let labelsList = ".categories__list";
  let labelsListActive = "checklist-active";
  let labelActive = "checkbox--label-active";
  let animationClass = "animation";
  let inputCheckbox = ".checkbox";

  function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
    let pubBtn = document.querySelector(a);
    let labels = document.querySelectorAll(b);
    let listLabels = document.querySelector(c);
    pubBtn.addEventListener("click", toggleSpoiler);
    pubBtn.addEventListener("click", function() {
      this.classList.toggle('active')
    })
    pubBtn.addEventListener("keyup", function(e) {
      console.log(e.key);
      if (e.code === "Enter") {
        toggleSpoiler();
      };
    }) ;   
  function toggleSpoiler() {
      if (!listLabels.classList.contains(labelsListActive)) {
      listLabels.classList.add(labelsListActive);
      labels.forEach(item => {
       // item.classList.add("checkbox--label-active");
        animationItem(item, labelActive, animationClass, "add");
      })
    } else {
      listLabels.classList.remove(labelsListActive);
      labels.forEach(item => {
        if (item.querySelector(inputCheckbox).checked) {
        animationItem(item, labelActive, animationClass, "add");
        } else {
          animationItem(item, labelActive, animationClass, "remove");
        }
        });
    }
    labels.forEach(item => {
      item.addEventListener("click", function() {
        if (!listLabels.classList.contains(labelsListActive)) {
          animationItem(this, labelActive, animationClass, "remove");
        }
      });
    })
  }
  function animationItem(item, class1, class2, f) {
   if (f === "add") {
      item.classList.add(class1);
    setTimeout(function() {
      item.classList.add(class2)
    }, 100);
  
   } else {
       item.classList.remove(class2);
    setTimeout(function() {
      item.classList.remove(class1)
    }, 300);
    }
   
  }
}
checkboxToggle(pubBtn, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);
  //pub checkbox mobile
});