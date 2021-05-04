"use strict"
const openMenu = document.querySelector('.servis__item--menu');
const darkBackground = document.querySelector('.substrate');
const assideOpenBtn = document.getElementById('asside');
const openCatalog = document.querySelector('.header__catalog');
const catalogList = document.querySelector('.catalog__list');
const catalogSubList = document.querySelector('.catalog__sub-list');
const catalogSubListTwo = document.querySelector('.catalog__sub-sub-list');
const catalogNav = document.querySelector('.catalog__nav');
const catalogSoci = document.querySelector('.catalog__soci');
const catalogWidth = document.getElementById('width');
// Открытие боковой панели в блоке classic
assideOpenBtn.addEventListener('click', () => {
  const asideOpenList = document.querySelector('.aside');
  if (asideOpenList.classList.contains('aside-open')) {
    asideOpenList.classList.remove('aside-open');
    darkBackground.classList.remove('active');
    assideOpenBtn.textContent = 'Параметры';
    assideOpenBtn.classList.remove('guitar-cards__btn--open');
  } else {
    asideOpenList.classList.add('aside-open');
    darkBackground.classList.add('active');
    assideOpenBtn.textContent = 'Скрыть параметры';
    assideOpenBtn.classList.add('guitar-cards__btn--open');
  }
});
// Навигация в футере
const footerNavs = document.querySelectorAll('.inform__title');
for (let footerNav of footerNavs) {
  footerNav.addEventListener('click', () => {
    footerNav.classList.toggle('inform__title--open');
    footerNav.nextElementSibling.classList.toggle('active');
  })
}
// открыть меню  на мобильнике
const servisIcon = document.querySelector('.servis__icon--menu');
openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('servis__item--open');
  servisIcon.classList.toggle('opacity');
  openCatalog.classList.toggle('active');
  darkBackground.classList.toggle('active');
  catalogWidth.classList.toggle('catalog__wrap--mobile');
  catalogList.classList.toggle('catalog__list--mobile');
  catalogSubList.classList.toggle('catalog__sub-list--mobile');
  catalogSubListTwo.classList.toggle('catalog__sub-sub-list--mobile');
  catalogSoci.classList.toggle('catalog__soci--mobile');
  catalogNav.classList.toggle('catalog__nav--mobile');
});
