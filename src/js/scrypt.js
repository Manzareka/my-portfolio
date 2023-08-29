"use strict";

// HEADER SLIDER ANIMATION //

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const sliderWrapper = document.querySelector(".slider-wrapper");

  let activeIndex = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderSlides();
  function showNext() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }

  let sliderIntervalId = null;

  function startAutoSliderFn() {
    sliderIntervalId = setInterval(showNext, 3000);
  }

  startAutoSliderFn();
}

initSlider();

// SERVICES SECTION HOVER //

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

text1.onmouseover = function () {
  text1.innerHTML = `Designing the visual layout of websites, including selecting color schemes, typography, and overall aesthetics. Creating mockups, wireframes, and prototypes to plan the website's look and feel.`;
};

text1.onmouseout = function () {
  text1.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Website Design</h3>`;
};

text2.onmouseover = function () {
  text2.innerHTML = `Ensuring that websites are responsive, meaning they adapt and display properly on different devices and screen sizes, such as desktops, tablets, and smartphones.`;
};

text2.onmouseout = function () {
  text2.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Responsive Design</h3>`;
};

text3.onmouseover = function () {
  text3.innerHTML = `Writing HTML and CSS code to structure the content and define the visual presentation of the website.`;
};

text3.onmouseout = function () {
  text3.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">HTML/CSS Coding</h3>`;
};

text4.onmouseover = function () {
  text4.innerHTML = `Use JavaScript to add interactivity and dynamic elements to websites. This can include animations, interactive forms, pop-up modals, and more.`;
};

text4.onmouseout = function () {
  text4.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">JS Development</h3>`;
};

// COMMENTS SECTION SLIDER //

let commentsSlides = document.querySelectorAll(".comments-slide");
let commentsButton1 = document.getElementById("comments-button-1");
let commentsButton2 = document.getElementById("comments-button-2");
let commentsButton3 = document.getElementById("comments-button-3");

commentsSlides[0].classList.add("active");

commentsButton1.addEventListener("click", function () {
  commentsSlides[0].classList.add("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton2.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.add("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton3.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.add("active");
});

// PROJECTS CLICK EFFECT //

let liAll = document.getElementById("liAll");
let liMyPortfolio = document.getElementById("liMyPortfolio");
let liOmnifoodProject = document.getElementById("liOmnifoodProject");
let liRentApartment = document.getElementById("liRentApartment");
let liFurnitureVerse = document.getElementById("liFurnitureVerse");
let liGuessMyNumber = document.getElementById("liGuessMyNumber");
let liPigGame = document.getElementById("liPigGame");

let gridMyPortfolio = document.getElementById("gridMyPortfolio");
let gridOmnifoodProject = document.getElementById("gridOmnifoodProject");
let gridRentApartment = document.getElementById("gridRentApartment");
let gridFurnitureVerse = document.getElementById("gridFurnitureVerse");
let gridGuessMyNumber = document.getElementById("gridGuessMyNumber");
let gridPigGame = document.getElementById("gridPigGame");

let array = [
  gridAll,
  gridMyPortfolio,
  gridOmnifoodProject,
  gridRentApartment,
  gridFurnitureVerse,
  gridGuessMyNumber,
  gridPigGame,
];

function removeStyles() {
  array.forEach((item) => {
    item.removeAttribute("style");
  });
}

liAll.addEventListener("click", function () {
  array.forEach((item) => {
    item.style.filter = "brightness(100%)";
  });
});

liMyPortfolio.addEventListener("click", function () {
  removeStyles();
  gridMyPortfolio.style.filter = "brightness(100%)";
});

liOmnifoodProject.addEventListener("click", function () {
  removeStyles();
  gridOmnifoodProject.style.filter = "brightness(100%)";
});

liRentApartment.addEventListener("click", function () {
  removeStyles();
  gridRentApartment.style.filter = "brightness(100%)";
});

liFurnitureVerse.addEventListener("click", function () {
  removeStyles();
  gridFurnitureVerse.style.filter = "brightness(100%)";
});

liGuessMyNumber.addEventListener("click", function () {
  removeStyles();
  gridGuessMyNumber.style.filter = "brightness(100%)";
});

liPigGame.addEventListener("click", function () {
  removeStyles();
  gridPigGame.style.filter = "brightness(100%)";
});
