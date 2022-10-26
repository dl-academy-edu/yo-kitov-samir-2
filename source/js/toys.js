// код был взят с https://nikitahl.com/style-range-input-css
// и переделан под данную задачу

const rangeInput = document.querySelector('.options__form__range');

function handleInputChange() {
  let target = rangeInput;
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

if (rangeInput) {
  handleInputChange();
  rangeInput.addEventListener('input', handleInputChange);
}

