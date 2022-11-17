const flipSliderCatalog = () => {

}

function moveSlider(parentSelector, numberSlide) {
  const parent = document.querySelector(`${parentSelector}`);
  parent.style.left = -parent.children[numberSlide].offsetLeft + 'px';
}

export {moveSlider}
