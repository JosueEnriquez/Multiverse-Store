//!=============== NavBar ===============//

const list = document.querySelectorAll(".nav__list-item");

function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));

//!=============== Slider ===============//

const slides = document.getElementById("slides");
const allSlides = document.querySelectorAll(".slide");
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;

let canISlide = true;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

next.addEventListener("click", () => switchSlide("next"));
prev.addEventListener("click", () => switchSlide("prev"));

slides.addEventListener("transitionend", checkIndex);

function switchSlide(arg, arg2) {
  slides.classList.add("transition");

  if (canISlide) {
    if (!arg2) {
      initialPosition = slides.offsetLeft;
    }
    if (arg == "next") {
      slides.style.left = `${initialPosition - allSlides[0].offsetWidth}px`;
      index++;
    } else {
      slides.style.left = `${initialPosition + allSlides[0].offsetWidth}px`;
      index--;
    }
  }

  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");

  if (index == -1) {
    slides.style.left = `-${slidesLength * allSlides[0].offsetWidth}px`;
    index = slidesLength - 1;
  }

  if (index == slidesLength) {
    slides.style.left = `-${1 * allSlides[0].offsetWidth}px`;
    index = 0;
  }

  canISlide = true;
}