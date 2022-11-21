// import {moveSlider, startSlideCounter} from "./utils";
//
// const parentSlidesRibbon = document.querySelector('.slider__ribbon');
//
// let step = 1;
// let visibleSlides = 1;
//
// const getCountSlides = startSlideCounter();
//
// if (parentSlidesRibbon) {
//   parentSlidesRibbon.addEventListener("click", (e) => {
//     if (!e.target.closest('.slider__controls__arrow')) {
//       return;
//     }
//
//     const target = e.target;
//     const dataArrow = target.dataset.arrow;
//
//     switch(dataArrow) {
//       case 'right':
//         moveSlider('.categories', getCountSlides(parentSlidesRibbon, step, visibleSlides, 'right'));
//         break;
//
//       case 'left':
//         moveSlider('.categories', getCountSlides(parentSlidesRibbon, step, visibleSlides, 'left'));
//         break;
//
//       default:
//         return;
//     }
//   })
// }
