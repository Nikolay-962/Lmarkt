"use strict"

const structureBtns = document.querySelectorAll('.orders__btn--two');
const structureOpen = document.querySelector('.orders__item--structure');
for (let structureBtn of structureBtns) {
  structureBtn.addEventListener('click', () => {
    structureOpen.classList.toggle('active');
  })
}

//перелючение на странице в Личном кабинете. "Купленные товары"
const boughtBtn = document.getElementById('buy');
const showPurchased = document.querySelector('.purchased');
boughtBtn.addEventListener('click', () => {
  if (showPurchased.classList.contains('active')) {
    showPurchased.classList.remove('active');
  } else {
    showPurchased.classList.add('active');
    boughtBtn.classList.add('description__btn--active');
    informBtn.classList.remove('description__btn--active');
    dataBtn.classList.remove('description__btn--active');
    showOrders.classList.remove('active');
    showData.classList.remove('active');
  }
});
//переслючение на странице в Личном кабинете. "Информация о заказах"
const informBtn = document.getElementById('orders');
const showOrders = document.querySelector('.orders');
informBtn.addEventListener('click', () => {
  if (showOrders.classList.contains('active')) {
    showOrders.classList.remove('active');
  } else {
    showOrders.classList.add('active');
    informBtn.classList.add('description__btn--active');
    boughtBtn.classList.remove('description__btn--active');
    dataBtn.classList.remove('description__btn--active');
    showPurchased.classList.remove('active');
    showData.classList.remove('active');
  }
});
// переключение настранице в Личном каббинете Мои Данные
const dataBtn = document.getElementById('mydata');
const showData = document.querySelector('.my-data');
dataBtn.addEventListener('click', () => {
  if (showData.classList.contains('active')) {
    showData.classList.remove('active');
  } else {
    showData.classList.add('active');
    dataBtn.classList.add('description__btn--active');
    boughtBtn.classList.remove('description__btn--active')
    informBtn.classList.remove('description__btn--active');
    showPurchased.classList.remove('active');
    showOrders.classList.remove('active');
  }
});