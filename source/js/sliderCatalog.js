import {moveSlider, changeCounterArrows} from "./utils.js";

const arrowBox = document.querySelector('.products-slider__navigation')
const parentSlides = document.querySelector('.categories')

let step = 1;
let visibleSlides = 1;

const counter = {
  count: 1
}

const counterParametersRight = {
  parentSlides: parentSlides,
  step: step,
  visibleSlides: visibleSlides,
  side: 'right',
  counter: counter
}
const counterParametersLeft = {
  parentSlides: parentSlides,
  step: step,
  visibleSlides: visibleSlides,
  side: 'left',
  counter: counter
}

if (arrowBox) {
  arrowBox.addEventListener("click", (e) => {
    if (!e.target.closest('.products-slider__navigation__arrow')) {
      return;
    }

    const target = e.target;
    const dataArrow = target.dataset.arrow;

    switch(dataArrow) {
      case 'right':
        moveSlider(parentSlides , changeCounterArrows(counterParametersRight));
        break;

      case 'left':
        moveSlider(parentSlides , changeCounterArrows(counterParametersLeft));
        break;

      default:
        return;
    }
  })
}
