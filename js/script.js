$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="ui/Arrows/nextArrow.svg"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="ui/Arrows/prevArrow.svg"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          },
        ]
      });
});