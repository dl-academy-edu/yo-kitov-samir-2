import {moveSlider, changeCounterArrows} from './utils.js';

const arrowBox = document.querySelector('.products-slider__navigation');
const parentSlides = document.querySelector('.categories');

const right = 'right';
const left = 'left';

const parametersSlider = {
  parentSlides: parentSlides,
  step: 1,
  visibleSlides: 1,
  counter: 1,
  prevCounter: 0
};

if (arrowBox) {
  arrowBox.addEventListener('click', (e) => {
    if (!e.target.closest('.products-slider__navigation__arrow')) {
      return;
    }

    const target = e.target;
    const dataArrow = target.dataset.arrow;

    switch (dataArrow) {
      case 'right':
        parametersSlider.counter = changeCounterArrows(parametersSlider, right);

        moveSlider(parentSlides, parametersSlider.counter);
        break;

      case 'left':
        parametersSlider.counter = changeCounterArrows(parametersSlider, left);

        moveSlider(parentSlides, parametersSlider.counter);
        break;
    }
  });
}
