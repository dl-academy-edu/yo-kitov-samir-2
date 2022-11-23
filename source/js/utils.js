function changeCounterArrows({parentSlides, step, visibleSlides, side, counter}) {
  switch (side) {
    case 'left':
      return counter.count -= Math.min(step, parentSlides.children.length - (parentSlides.children.length - counter.count))

    case 'right':
      return counter.count += Math.min(step, parentSlides.children.length - counter.count - visibleSlides)
  }
}

function changeCounterButtons(objCount, numberButton) {
  objCount.count = numberButton;
}

function moveSlider(parentElem, numberSlide) {
  parentElem.style.marginLeft = -parentElem.children[numberSlide].offsetLeft + 'px';
}

function createNumberButton(number, selectorItem, selectorButton, controlActive, defaultNumber) {
  const result = [];

  for (let i = 0; i < number; i++) {
    const defaultItem = document.querySelector(selectorItem);
    const control = defaultItem.cloneNode(true);
    const buttonControl = control.querySelector(selectorButton);

    buttonControl.setAttribute('aria-label', `Переключить на ${i} слайдер`);
    buttonControl.dataset.buttonNumber = i.toString();
    buttonControl.textContent = i + 1;

    // Делаем все кнопки слайдера не активными
    if (control.classList.contains(controlActive)) {
      control.classList.remove(controlActive);
    }

    result.push(control);
  }

  // делаем одну кнопку активной
  result[defaultNumber - 1]?.classList.add(controlActive);
  return result;
}

function makeItemActive(parentDots, prevDot, currentDot, selectorActive) {
  parentDots.children[prevDot].classList.remove(selectorActive);
  parentDots.children[currentDot].classList.add(selectorActive);
}

export {moveSlider, changeCounterArrows, createNumberButton, makeItemActive, changeCounterButtons}
