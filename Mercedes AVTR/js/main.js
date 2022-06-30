$(function () {
    $('.design-slider').slick({
        dots: false,
        speed: 1000,
        centerMode: true,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="./images/design/slider/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="./images/design/slider/arrow-right.svg" alt="">',
        responsive: [
            {
              breakpoint: 361,
              settings: {
                variableWidth: false,
                slidesToShow: 1,
              }
            },
          ]
    });
});

