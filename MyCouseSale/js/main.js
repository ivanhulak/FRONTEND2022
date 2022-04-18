$(function(){
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        speed: 1000,
        dots: true,
    });

    $('select').styler();

    $('.news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        speed: 1000,
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
}); 


