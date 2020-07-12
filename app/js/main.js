$(function () {

    $(".rate-star").rateYo({
      rating: 4.5,
      ratedFill: "#ffc000",
      starWidth: "15px",
      readOnly: true
    });

    $(".rate-products").rateYo({
      rating: 4.5,
      ratedFill: "#ffc000",
      starWidth: "13px",
      readOnly: true
    });
  
    $('.slider__inner').slick({
      prevArrow: '<button class="slick-arrow slick-prev"></button>',
      nextArrow: '<button class="slick-arrow slick-next"></button>',
    });
  
    var mixer = mixitup('.products__inner-box');
  
  });