$(document).ready(function () {
  $('.slider-top__list').slick({
    dots: true,
    arrows: true,
    adaptiveHight: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.p-slider__list').slick({
    dots: true,
    arrows: true,
    adaptiveHight: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.good-slider__list').slick({
    dots: true,
    arrows: true,
    adaptiveHight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.tools-slider__list').slick({
    dots: true,
    arrows: true,
    adaptiveHight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.instrument__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    variableWidth: true,
    initialSlide: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});