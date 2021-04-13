
const profileOpen = document.querySelector('.profile-form__wrap');
const clousProfile = document.querySelector('.profile-form__btn');
const openProfile = document.getElementById('profile');
const windowComeBack = profileOpen.querySelector('.profile-form__span');
const profileButton = profileOpen.querySelector('.profile-form__button');
const profileTitle = profileOpen.querySelector('.profile-form__title');
const profilePhone = profileOpen.querySelector('.profile-form__phone');
const phoneNumber = profileOpen.querySelector('.number');
const profileText = profileOpen.querySelector('.profile-form__text');
let phoneValue = document.getElementById('tel');


// Эти две функции открывают окно попапа
openProfile.addEventListener('click', () => {
  profileOpen.classList.add('profile-form__wrap--open');
  darkBackground.classList.add('active');
  darkBackground.style.zIndex = 9;
});
clousProfile.addEventListener('click', function () {
  profileOpen.classList.remove('profile-form__wrap--open');
  darkBackground.classList.remove('active');
});
openProfile.addEventListener('click', () => {
});

// Меняем контент по клику на кнопку Получить СМС
profileButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  windowComeBack.classList.add('profile-form__span--two');
  profileTitle.textContent = 'Введите код';
  profileTitle.nextElementSibling.classList.add('profile-form__description--none');
  profilePhone.textContent = 'Код выслан на номер:' + '';
  phoneNumber.textContent = phoneValue.value;
  phoneValue.value = '';
  phoneValue.placeholder = 'Введите код';
  profileButton.classList.add('profile-form__button--clouse');
  profileButton.nextElementSibling.classList.add('profile-form__button-two--open');
  profileText.classList.add('profile-form__text--none');
  profileText.nextElementSibling.classList.add('profile-form__time--block');

});

windowComeBack.addEventListener('click', (evt) => {
  evt.preventDefault();
  windowComeBack.classList.remove('profile-form__span--two');
  profileTitle.textContent = 'Войти в профиль';
  profileTitle.nextElementSibling.classList.remove('profile-form__description--none');
  profilePhone.textContent = 'Номер телефона';
  phoneValue.textContent = '';
  phoneValue.placeholder = '+7(___)___-__-__';
  profileButton.classList.remove('profile-form__button--clouse');
  profileButton.nextElementSibling.classList.remove('profile-form__button-two--open');
  profileText.classList.remove('profile-form__text--none');
  profileText.nextElementSibling.classList.remove('profile-form__time--block');
});
profileButton.nextElementSibling.addEventListener('click', function () {
  timer();
});

const addZero = (num) => {
  if (num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}
let seconds = document.querySelector('.seconds');
let counter = 60;
function timer() {
  counter--;
  seconds.innerHTML = '00' + ':' + addZero(counter);
  let timerId = setTimeout('timer()', 1000);
  if (counter <= 0) {
    clearTimeout(timerId);
  }
}