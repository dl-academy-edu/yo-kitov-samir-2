import {moveSlider, changeCounterArrows} from "./utils.js";

const arrowBox = document.querySelector('.products-slider__navigation')
const parentSlides = document.querySelector('.categories')

const counter = {
  count: 1
}

let step = 1;
let visibleSlides = 1;

if (arrowBox) {
  arrowBox.addEventListener("click", (e) => {
    if (!e.target.closest('.products-slider__navigation__arrow')) {
      return;
    }

    const target = e.target;
    const dataArrow = target.dataset.arrow;

    switch(dataArrow) {
      case 'right':
        moveSlider(parentSlides , changeCounterArrows(parentSlides, step, visibleSlides, 'right', counter));
        break;

      case 'left':
        moveSlider(parentSlides , changeCounterArrows(parentSlides, step, visibleSlides, 'left', counter));
        break;

      default:
        return;
    }
  })
}
