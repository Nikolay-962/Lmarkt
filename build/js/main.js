"use strict"

const sitiBtns = document.querySelectorAll('.region-button');
const catalogBtn = document.getElementById('catalog');
const tounLink = document.querySelectorAll('.scrol__item');
const openList = document.getElementById('guitar');
const openListTwo = document.getElementById('set');
const catalogWidth = document.getElementById('width');
const darkBackground = document.querySelector('.substrate');
const arrowTop = document.querySelector('.region-button');
const catalogList = document.querySelector('.catalog__list');
const catalogSubList = document.querySelector('.catalog__sub-list');
const catalogSubListTwo = document.querySelector('.catalog__sub-sub-list');
const showList = document.querySelector('.bottom-arrow');
const blockFix = document.querySelector('.page');
const openMenu = document.querySelector('.servis__item--menu');
const openCatalog = document.querySelector('.header__catalog');
const servisIcon = document.querySelector('.servis__icon--menu');
const subBack = document.querySelector('.catalog__title');
const subBackOne = document.querySelector('.catalog__sub-item--back');
const subSubBack = document.querySelector('.catalog__sub-sub-item--back');
const clousCatalog = catalogList.firstElementChild;
const catalogSoci = document.querySelector('.catalog__soci');
const servisMobile = document.querySelector('.servis__list--catalog');
const navMobile = document.querySelector('.nav__list--mobile');
const catalogNav = document.querySelector('.catalog__nav')
//Фиксирование страници при выпадающих окнах

//Список городов
for (let sitiBtn of sitiBtns) {
  sitiBtn.addEventListener('click', () => {
    let openSiti = document.querySelector('.region__sities');
    openSiti.classList.toggle('active');
    //blockFix.classList.toggle('fix');
    darkBackground.classList.toggle('active');
    arrowTop.classList.toggle('region-button--open');
  });
}
//Меняет текст в кнопке и не только.
for (let i = 0; i < tounLink.length; i++) {
  tounLink[i].addEventListener('click', () => {
    let pickUpPoint = document.querySelector('.siti__m-main');
    let siti = tounLink[i].textContent;
    sitiBtn.textContent = siti;
    pickUpPoint.innerHTML = siti;

  });
}
// Каталог товаров
catalogBtn.addEventListener('click', () => {
  openCatalog.classList.toggle('active');
  darkBackground.classList.toggle('active');
  darkBackground.classList.toggle('substrate--catalog');
  catalogBtn.classList.toggle('catalog-btn__button--open');
});

openList.addEventListener('click', () => {
  //let widthScreen = document.querySelector('.header').offsetWidth;
  if (catalogSubList.classList.contains('open')) {
    catalogSubList.classList.remove('open');
    catalogSubListTwo.classList.remove('open');
    catalogWidth.style.width = "52%";
  } else {
    catalogSubList.classList.add('open');
    catalogWidth.style.width = "100%"
  }
  servisMobile.style.display = "none";
  navMobile.style.display = "none";
});

openListTwo.addEventListener('click', () => {
  if (catalogSubListTwo.classList.contains('open')) {
    catalogSubListTwo.classList.remove('open');
    catalogWidth.style.width = "100%"
  } else {
    catalogSubListTwo.classList.add('open');
    catalogWidth.style.width = "100%"
  }
});

subBack.addEventListener('click', () => {
  if (catalogWidth.classList.contains('catalog__wrap--mobile')) {
    catalogList.classList.toggle('clous');
    catalogWidth.style.width = "100%"
  }
});

subBackOne.addEventListener('click', () => {
  if (catalogWidth.classList.contains('catalog__wrap--mobile')) {
    catalogSubList.classList.remove('open');
    catalogWidth.style.width = "100%"
    servisMobile.style.display = "block";
    navMobile.style.display = "block";
  }
});

subSubBack.addEventListener('click', () => {
  if (catalogWidth.classList.contains('catalog__wrap--mobile')) {
    catalogSubListTwo.classList.remove('open');
    catalogWidth.style.width = "100%"
  }
});

//Инструменты по видам
showList.addEventListener('click', () => {
  const rectangle = document.querySelector('.rectangle');
  if (rectangle.classList.contains('active')) {
    rectangle.classList.remove('active');
    showList.classList.add('bottom-arrow--open');
    rectangle.style.top = '100%';
  } else {
    rectangle.classList.add('active');
    showList.classList.remove('bottom-arrow--open');
    rectangle.style.top = '58%';
  }
});
// открывает меню в мобильном
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

// открывание навигации в футере

const footerNavs = document.querySelectorAll('.inform__title');
for (let footerNav of footerNavs) {
  footerNav.addEventListener('click', () => {
    footerNav.classList.toggle('inform__title--open');
    footerNav.nextElementSibling.classList.toggle('active');
  })
}