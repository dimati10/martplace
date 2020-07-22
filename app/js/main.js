$(function () {

    $(".rate-star").rateYo({
      rating: 4.5,
      ratedFill: "#ffc000",
      starWidth: "15px",
      spacing: "4px",
      readOnly: true
    });

    $(".rate-products").rateYo({
      rating: 4.5,
      ratedFill: "#ffc000",
      starWidth: "13px",
      spacing: "4px",
      readOnly: true
    });
  
    $('.slider__inner').slick({
      prevArrow: '<button class="slick-arrow slick-prev"></button>',
      nextArrow: '<button class="slick-arrow slick-next"></button>'
    });

    $('.followers-slider__inner').slick({
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
  
    var mixer = mixitup('.products__inner-box');
  
  });