
/*
const images = document.querySelectorAll('.slider-top__img');
const sliderLine = document.querySelector('.slider-top__list');
let count = 0;
let widthSlid;

function init() {
  widthSlid = document.querySelector('.slider-top').offsetWidth;
  console.log(widthSlid);

  for (let image of images) {
    image.style.width = widthSlid + 'px';
    image.style.hight = 'auto';
  }
  rollSliider();
}

window.addEventListener('resize', init);
init();
document.querySelector('.slider-next').addEventListener('click', function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSliider();
});

function rollSliider() {
  sliderLine.style.transform = 'translate(-' + count * widthSlid + 'px)';
}

document.querySelector('.slider-prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSliider();
});;
*/