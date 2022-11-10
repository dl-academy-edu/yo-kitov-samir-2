if (document.querySelector('.slider-banner__navigation__list')) {
  const listControls = document.querySelector('.slider-banner__navigation__list');
  const itemControl = listControls.querySelector('.slider-banner__navigation__item')
  const listSlider = document.querySelector('.slider-banner__list')
  const itemSlider = listSlider.querySelector('.slider-banner__item')
  const counterSlider = document.querySelector('.slider-banner__navigation__counter')

  const FIRST_BUTTON = 1;
  const ITEM_ACTIVE = "slider-banner__item--active"
  const CONTROL_ACTIVE = "slider-banner__navigation__item--active"

  let previousSlider = Number(listControls.querySelector(`.${CONTROL_ACTIVE}`).dataset.buttonNumber);

  listControls.replaceChildren();
  listControls.append(...createControls(listSlider.children.length));

  listControls.addEventListener("click", onControlClick)

  function onControlClick(e) {
    const target = e.target

    if (target.closest('.slider-banner__navigation__button')) {
      const data = getDataAttribute(target);

      setCounter(data);
      flipSlider(data, previousSlider)

      previousSlider = data;
    }
  }

  function createControls(number) {
    const result = [];

    for (let i = FIRST_BUTTON; i <= number; i++) {
      const control = itemControl.cloneNode(true);
      const buttonControl = control.querySelector('.slider-banner__navigation__button')

      buttonControl.setAttribute('aria-label', `Переключить на ${i} слайдер`)
      control.dataset.buttonNumber = i.toString();

      if (i > FIRST_BUTTON) {
        control.classList.remove(CONTROL_ACTIVE)
      }

      result.push(control);
    }

    return result;
  }

  function getDataAttribute(elem) {
      return Number(elem?.dataset.buttonNumber) || Number(elem.parentElement.dataset.buttonNumber);
  }

  function setCounter(number) {
    counterSlider.textContent = `0${number}`;
  }

  function flipSlider(number, prevSlider) {
    listSlider.children[prevSlider - 1].classList.remove(ITEM_ACTIVE);
    listSlider.children[number - 1].classList.add(ITEM_ACTIVE);
  }
}
