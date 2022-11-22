function changeCounterArrows(parentSlides, step, visibleSlides, leftOrRight, count) {
  switch (leftOrRight) {
    case 'left':
      return count.count -= Math.min(step, parentSlides.children.length - (parentSlides.children.length - count.count))

    case 'right':
      return count.count += Math.min(step, parentSlides.children.length - count.count - visibleSlides)
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

function makeItemActive(parentControls, prevSlider, number, selectorActive) {
  parentControls.children[prevSlider].classList.remove(selectorActive);
  parentControls.children[number].classList.add(selectorActive);
}

export {moveSlider, changeCounterArrows, createNumberButton, makeItemActive, changeCounterButtons}
