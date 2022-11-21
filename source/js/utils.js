function startSlideCounter() {
  let counterSlide = 0;

  return function (parentSlides, step, visibleSlides, leftOrRight) {
    switch (leftOrRight) {
      case 'left':
        return counterSlide -= Math.min(step, parentSlides.children.length - (parentSlides.children.length - counterSlide))

      case 'right':
        return counterSlide += Math.min(step, parentSlides.children.length - counterSlide - visibleSlides)
    }
  }
}

function moveSlider(parentElem, numberSlide) {
  parentElem.style.marginLeft = -parentElem.children[numberSlide].offsetLeft + 'px';
}

export {moveSlider, startSlideCounter}
