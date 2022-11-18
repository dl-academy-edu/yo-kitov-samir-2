const popup = document.querySelector('.popup') || document.querySelector('.feedback');
const popupClose = document.querySelector('.popup__close');
const popupOpen = document.querySelector('.slider-banner__info__btn');
const checkboxAgreement = document.querySelector('#agreement');
const submitPopup = document.querySelector('.feedback__form__submit');
const buttonNav = document.querySelector('.header__button-nav');
const nav = document.querySelector('.header-nav');

const POPUP_ACTIVE = 'popup--active';
const MENU_ACTIVE = 'header__button-nav--active';
const HIDDEN_MENU = 'header-nav--hidden';

// закрытие и открытие попапа
if (popupOpen) {
  popupOpen.addEventListener('click', () => {
    if (popup) {
      popup.classList.add(POPUP_ACTIVE);
    }
  });
}

if (popup) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains(POPUP_ACTIVE)) {
      closePopup();
    }
  });
}

if (popupClose) {
  popupClose.addEventListener('click', (e) => {
    if (popup) {
      e.preventDefault();
      closePopup();
    }
  });
}

if (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
}

// активировать кнопку формы
if (checkboxAgreement) {
  checkboxAgreement.addEventListener('click', switchDisabled);
}

// переключить бургер меню
buttonNav.addEventListener('click', switchMenu);

// функции
function closePopup() {
  popup.classList.remove(POPUP_ACTIVE);
}

function switchDisabled() {
  submitPopup.disabled = !submitPopup.disabled;
}

function switchMenu(e) {
  const target = e.target;

  if (!nav.classList.contains(HIDDEN_MENU)) {
    target.classList.toggle(MENU_ACTIVE);

    const removeAccessibility = setTimeout(() => {
      nav.classList.add(HIDDEN_MENU);
      clearTimeout(removeAccessibility)
    }, 400)

    return;
  }

  nav.classList.remove(HIDDEN_MENU);
  const addAccessibility = setTimeout(() => {
    target.classList.toggle(MENU_ACTIVE);
    clearTimeout(addAccessibility)
  }, 0)
}
