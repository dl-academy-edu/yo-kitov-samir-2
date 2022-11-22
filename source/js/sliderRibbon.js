import {moveSlider, changeCounterArrows, changeCounterButtons, createNumberButton, makeItemActive} from "./utils.js";

const parentSlides = document.querySelector('.slider__wrap-list');
const arrowBox = document.querySelector('.slider__controls');
const boxControls = document.querySelector('.slider__controls__dots');

const DEFAULT_CONTROL = 1;
const ITEM_ACTIVE = 'slider__controls__dot--active';
const BOX_ITEMS = '.slider__controls__dot';
const BUTTON = '.slider__controls__button';

const counter = {
  count: 0
}

const buttons = createNumberButton(parentSlides?.children.length, BOX_ITEMS, BUTTON, ITEM_ACTIVE, DEFAULT_CONTROL);

let step = 1;
let visibleSlides = 1;

boxControls?.replaceChildren();
boxControls?.append(...buttons);

if (arrowBox) {
  arrowBox.addEventListener("click", (e) => {
    if (e.target.closest('.slider__controls__arrow')) {
      const target = e.target;
      const dataArrow = target.dataset.arrow;

      switch(dataArrow) {
        case 'right':
          const countRight = changeCounterArrows(parentSlides, step, visibleSlides, 'right', counter);

          moveSlider(parentSlides, countRight);
          makeItemActive(boxControls, counter.count - 1, countRight, ITEM_ACTIVE);
          break;

        case 'left':
          const countLeft = changeCounterArrows(parentSlides, step, visibleSlides, 'left', counter);

          moveSlider(parentSlides, countLeft);
          makeItemActive(boxControls, counter.count + 1, countLeft, ITEM_ACTIVE);
          break;

        default:
          return;
      }
    }

    if (e.target.closest(BUTTON)) {
      const target = e.target;
      const dataButton = Number(target.dataset.buttonNumber);

      makeItemActive(boxControls, counter.count, dataButton, ITEM_ACTIVE);
      moveSlider(parentSlides, dataButton);

      changeCounterButtons(counter, dataButton)
    }
  })
}
