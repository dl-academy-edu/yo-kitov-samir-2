if (document.querySelector('.slider-banner__navigation__list')) {
  const listControls = document.querySelector('.slider-banner__navigation__list');
  const itemControl = listControls.querySelector('.slider-banner__navigation__item');
  const listSlider = document.querySelector('.slider-banner__list');
  const itemSlider = listSlider.querySelector('.slider-banner__item');
  const counterSlider = document.querySelector('.slider-banner__navigation__counter');

  const DEFAULT_CONTROL = 1;
  const ITEM_ACTIVE = 'slider-banner__item--active';
  const ITEM_HIDDEN = 'slider-banner__item--hidden';
  const CONTROL_ACTIVE = 'slider-banner__navigation__item--active';

  let previousNumber = Number(listControls.querySelector(`.${CONTROL_ACTIVE}`).dataset.buttonNumber);

  [].forEach.call(listSlider.children, function (item) {
    if (!item.classList.contains(ITEM_HIDDEN) && !item.classList.contains(ITEM_ACTIVE)) {
      item.classList.add(ITEM_HIDDEN);
    }
  });

  listControls.replaceChildren();
  listControls.append(...createControls(listSlider.children.length));

  listControls.addEventListener('click', onControlClick);

  function onControlClick(e) {
    const target = e.target;
    const data = getDataAttribute(target);

    if (!target.closest('.slider-banner__navigation__item') || listControls.children[data - 1] === listControls.children[previousNumber - 1]) {
      return;
    }

    setCounter(data);
    flipSlider(data, previousNumber);
    makeItemActive(data, previousNumber);

    previousNumber = data;
  }

  function createControls(number) {
    const result = [];

    for (let i = 1; i <= number; i++) {
      const control = itemControl.cloneNode(true);
      const buttonControl = control.querySelector('.slider-banner__navigation__button');

      buttonControl.setAttribute('aria-label', `Переключить на ${i} слайдер`);
      control.dataset.buttonNumber = i.toString();

      if (control.classList.contains(CONTROL_ACTIVE)) {
        control.classList.remove(CONTROL_ACTIVE);
      }

      result.push(control);
    }

    result[DEFAULT_CONTROL - 1].classList.add(CONTROL_ACTIVE);
    return result;
  }

  function getDataAttribute(elem) {
    return Number(elem?.dataset.buttonNumber) || Number(elem.parentElement.dataset.buttonNumber);
  }

  function setCounter(number) {
    counterSlider.textContent = `0${number}`;
  }

  function makeItemActive(number, prevSlider) {
    listControls.children[prevSlider - 1].classList.remove(CONTROL_ACTIVE);
    listControls.children[number - 1].classList.add(CONTROL_ACTIVE);
  }

  function flipSlider(number, prevItem) {
    const currentSlide = listSlider.children[number - 1];
    const previousSlide = listSlider.children[prevItem - 1];

    // currentSlide.addEventListener('transitionstart', () => {
    //   currentSlide.classList.remove(ITEM_HIDDEN);
    //   console.log('анимация началась');
    // });
    //
    // previousSlide.addEventListener('transitionend', () => {
    //   previousSlide.classList.add(ITEM_HIDDEN);
    //   console.log('анимация закончилась');
    // });

    previousSlide.classList.remove(ITEM_ACTIVE);
    setTimeout(() => {
      if (!previousSlide.classList.contains(ITEM_ACTIVE)) {
        previousSlide.classList.add(ITEM_HIDDEN);
      }
    }, 700);

    currentSlide.classList.remove(ITEM_HIDDEN);
    setTimeout(() => {
      currentSlide.classList.add(ITEM_ACTIVE);
    }, 0);
  }

  // function accessibilityItem(addAccessibility, removeAccessibility) {
  //   removeAccessibility;
  //   addAccessibility;
  // }
}
