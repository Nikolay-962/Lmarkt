/*
"use strict"
const darkBackground = document.querySelector('.substrate');
const openCatalog = document.querySelector('.header__catalog');
const sitiBtn = document.getElementById('town');
const blockFix = document.querySelector('.page');
const arrowTop = document.querySelector('.region__button');


const catalogBtn = document.getElementById('catalog');
catalogBtn.addEventListener('click', () => {
  openCatalog.classList.toggle('active');
  darkBackground.classList.toggle('active');
  darkBackground.classList.toggle('substrate--catalog');
  catalogBtn.classList.toggle('catalog-btn__button--open');
});

//Список городов
sitiBtn.addEventListener('click', () => {
  let openSiti = document.querySelector('.region__sities');
  openSiti.classList.toggle('active');
  blockFix.classList.toggle('fix');
  darkBackground.classList.toggle('active');
  arrowTop.classList.toggle('region__button--open');
});

// Навигация в footer
const footerNavs = document.querySelectorAll('.inform__title');
for (let footerNav of footerNavs) {
  footerNav.addEventListener('click', () => {
    footerNav.classList.toggle('inform__title--open');
    footerNav.nextElementSibling.classList.toggle('active');
  });
}
// Закрывающийся текст
const showText = document.querySelector('.description__text');
const showTextButton = document.querySelector('.bottom-arrow--cassio');
showTextButton.addEventListener('click', () => {
  const rectangle = document.querySelector('.rectangle');
  const sliderMargin = document.querySelector('.main__pop-goods');
  if (rectangle.classList.contains('active')) {
    rectangle.classList.remove('active');
    showTextButton.classList.remove('bottom-arrow--open');
    rectangle.style.top = '100%';
    showTextButton.textContent = 'Свернуть';
    sliderMargin.classList.remove('up');
  } else {
    rectangle.classList.add('active');
    showTextButton.classList.add('bottom-arrow--open');
    rectangle.style.top = '0%';
    showTextButton.textContent = 'Подробнее';
    sliderMargin.classList.add('up');
  }
})*/