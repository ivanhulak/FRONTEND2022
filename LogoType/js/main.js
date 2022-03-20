document.getElementById("start-fancybox").addEventListener("click", function (){
// Create array containing Fancybox slides
const slides = [...document.querySelectorAll(".fancybox-slide")].map(
    (node) => {
        return {
            src: node,
            type: "inline",
        };
    }
);

// Strt Fancybox with custom options
Fancybox.show(slides, {
    dragToClose: false,
    Carousel: {
        friction: 0.8,
        Panzoom: { touch: false },
        Navigation: false,
    },
});
});

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