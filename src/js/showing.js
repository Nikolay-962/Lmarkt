"use strict"
const darkBackground = document.querySelector('.substrate');
const openCatalog = document.querySelector('.header__catalog');
const sitiBtn = document.getElementById('town');
const blockFix = document.querySelector('.page');
const arrowTop = document.querySelector('.region__button');

const guitarSmall = document.getElementById('small').addEventListener('click', () => {
  const guitarBig = document.querySelector('.primary__img-big');
  guitarBig.classList.toggle('small');
  darkBackground.classList.toggle('active');

});
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
  })
}

