$(function () {

  $(".rate-star").rateYo({
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    starWidth: "15px",
    spacing: "4px",
    readOnly: true
  });

  $(".rate-products").rateYo({
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    starWidth: "13px",
    spacing: "4px",
    readOnly: true
  });

  $(".list-item__star").rateYo({
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    starWidth: "14px",
    spacing: "7px",
    readOnly: true
  });

  $('.slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>'
  });

  $('.followers-slider__content').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>'
  });

  $('.feedback-slider__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>'
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 150,
    to: 900,
    prefix: "$"
  });

  $('.filter-box__btn-list').on('click', function () {
    $('.products__item').addClass('list-item');
    $('.filter-box__btn-list').addClass('active');
    $('.filter-box__btn-items').removeClass('active');
  });
  $('.filter-box__btn-items').on('click', function () {
    $('.products__item').removeClass('list-item');
    $('.filter-box__btn-items').addClass('active');
    $('.filter-box__btn-list').removeClass('active');
  })

  $('.aside__title').on('click', function () {
    $(this).toggleClass('aside__title--closed');
    $(this).next().slideToggle();
  });

  var mixer = mixitup('.products__inner-box');

});