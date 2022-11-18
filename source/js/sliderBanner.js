if (document.querySelector('.slider-banner__navigation__list')) {
  const listControls = document.querySelector('.slider-banner__navigation__list');
  const itemControl = listControls.querySelector('.slider-banner__navigation__item');
  const listSlider = document.querySelector('.slider-banner__list');
  const itemSlider = listSlider.querySelector('.slider-banner__item');
  const counterSlider = document.querySelector('.slider-banner__navigation__counter');

  // Номер слайда который быдет активным при загрузки страницы
  const DEFAULT_CONTROL = 1;
  const ITEM_ACTIVE = 'slider-banner__item--active';
  const ITEM_HIDDEN = 'slider-banner__item--hidden';
  const CONTROL_ACTIVE = 'slider-banner__navigation__item--active';

  // Храним номер предыдущего слайда
  let previousNumber = Number(listControls.querySelector(`.${CONTROL_ACTIVE}`).dataset.buttonNumber);

  // На всякий случай при загрузке страницы проходим по всем слайдам кроме активного и убираем доступность
  [].forEach.call(listSlider.children, function (item) {
    if (!item.classList.contains(ITEM_HIDDEN) && !item.classList.contains(ITEM_ACTIVE)) {
      item.classList.add(ITEM_HIDDEN);
    }
  });

  // При загрузке страницы удалить все кнопки переключения слайдов
  // и добавить заного столько-же кнопок сколько и слайдов
  listControls.replaceChildren();
  listControls.append(...createControls(listSlider.children.length));

  listControls.addEventListener('click', onControlClick);

  if (localStorage.slide) {
    activateSlider(localStorage.slide, previousNumber);
  }

  // функции
  function onControlClick(e) {
    const target = e.target;
    const data = getDataAttribute(target);

    if (!target.closest('.slider-banner__navigation__item') || listControls.children[data - 1] === listControls.children[previousNumber - 1]) {
      return;
    }

    activateSlider(data, previousNumber);
  }

  function createControls(number) {
    const result = [];

    for (let i = 1; i <= number; i++) {
      const control = itemControl.cloneNode(true);
      const buttonControl = control.querySelector('.slider-banner__navigation__button');

      buttonControl.setAttribute('aria-label', `Переключить на ${i} слайдер`);
      control.dataset.buttonNumber = i.toString();

      // Делаем все кнопки слайдера не активными
      if (control.classList.contains(CONTROL_ACTIVE)) {
        control.classList.remove(CONTROL_ACTIVE);
      }

      result.push(control);
    }

    // делаем одну кнопку активной
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

  function hideSlide(prevItem) {
    const previousSlide = listSlider.children[prevItem - 1];

    // Прячем текущий слайдер
    previousSlide.classList.remove(ITEM_ACTIVE);
    // Если слайд спрятан, то убераем его доступность
    setTimeout(() => {
      if (!previousSlide.classList.contains(ITEM_ACTIVE)) {
        previousSlide.classList.add(ITEM_HIDDEN);
      }
    }, 700);
  }

  function showSlide(number) {
    const currentSlide = listSlider.children[number - 1];

    // Делаем следующий слайд доступным
    currentSlide.classList.remove(ITEM_HIDDEN);
    // Показываем следующий слайд
    setTimeout(() => {
      currentSlide.classList.add(ITEM_ACTIVE);
    }, 0);
  }

  function saveSlideToStorage(number) {
    localStorage.slide = number;
  }

  function activateSlider(number, prevItem) {
    setCounter(number);
    hideSlide(previousNumber);
    showSlide(number);
    makeItemActive(number, previousNumber);

    previousNumber = number;
    saveSlideToStorage(previousNumber);
  }
}
