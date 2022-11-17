import {moveSlider} from "./utils.js";


const arrowLeft = document.querySelector('.products-slider__navigation__arrow--arrow-left')
const arrowRight = document.querySelector('.products-slider__navigation__arrow--arrow-right')
const arrowBox = document.querySelector('.products-slider__navigation')
const parentSlides = document.querySelector('.categories')

let step = 1;
// let counterSlide = 0;
let visibleSlides = 1;

// const a = document.querySelector(`.categories`);

function startSlideCounter() {
  let counterSlide = 0;

  return function (parentSlides, step, visibleSlides, leftOrRight) {
    switch (leftOrRight) {
      case 'left':
        return counterSlide -= Math.min(step, parentSlides.children.length - (parentSlides.children.length - counterSlide))

      case 'right':
        return counterSlide += Math.min(step, parentSlides.children.length - counterSlide - visibleSlides)
    }
  }
}

const getCountSlides = startSlideCounter();

if (arrowBox) {
  arrowBox.addEventListener("click", (e) => {
    if (!e.target.closest('.products-slider__navigation__arrow')) {
      return;
    }

    const target = e.target;
    const dataArrow = target.dataset.arrow;

    switch(dataArrow) {
      case 'right':
        // counterSlide += Math.min(step, a.children.length - counterSlide - visibleSlides);
        // moveSlider('.categories', counterSlide);
        moveSlider('.categories', getCountSlides(parentSlides, step, visibleSlides, 'right'));
        break;

      case 'left':
        // counterSlide -= Math.min(step, a.children.length - (a.children.length - counterSlide)) ;
        // moveSlider('.categories', counterSlide);
        moveSlider('.categories', getCountSlides(parentSlides, step, visibleSlides, 'left'));
        break;

      default:
        return;
    }
  })
}
