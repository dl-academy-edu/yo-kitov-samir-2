import {moveSlider, changeCounterArrows, createNumberButton, makeItemActive} from './utils.js';

const parentSlides = document.querySelector('.slider__wrap-list');
const arrowBox = document.querySelector('.slider__controls');
const boxControls = document.querySelector('.slider__controls__dots');

const DEFAULT_CONTROL = 1;
const ITEM_ACTIVE = 'slider__controls__dot--active';
const BOX_ITEMS = '.slider__controls__dot';
const BUTTON = '.slider__controls__button';

const right = 'right';
const left = 'left';

const parametersSlider = {
  parentSlides: parentSlides,
  step: 1,
  visibleSlides: 1,
  counter: 0,
  prevCounter: 0
};

const buttons = createNumberButton(parentSlides?.children.length, BOX_ITEMS, BUTTON, ITEM_ACTIVE, DEFAULT_CONTROL);

boxControls?.replaceChildren();
boxControls?.append(...buttons);

if (arrowBox) {
  arrowBox.addEventListener('click', (e) => {
    if (e.target.closest('.slider__controls__arrow')) {
      const target = e.target;
      const dataArrow = target.dataset.arrow;

      switch (dataArrow) {
        case 'right':
          parametersSlider.prevCounter = parametersSlider.counter;
          parametersSlider.counter = changeCounterArrows(parametersSlider, right);

          moveSlider(parentSlides, parametersSlider.counter);
          makeItemActive(boxControls, parametersSlider.prevCounter, parametersSlider.counter, ITEM_ACTIVE);
          break;

        case 'left':
          parametersSlider.prevCounter = parametersSlider.counter;
          parametersSlider.counter = changeCounterArrows(parametersSlider, left);

          moveSlider(parentSlides, parametersSlider.counter);
          makeItemActive(boxControls, parametersSlider.prevCounter, parametersSlider.counter, ITEM_ACTIVE);
          break;
      }
    }

    if (e.target.closest(BUTTON)) {
      const target = e.target;
      const dataButton = Number(target.dataset.buttonNumber);

      parametersSlider.prevCounter = parametersSlider.counter;
      parametersSlider.counter = dataButton;
      makeItemActive(boxControls, parametersSlider.prevCounter, parametersSlider.counter, ITEM_ACTIVE);
      moveSlider(parentSlides, dataButton);
    }
  });
}
