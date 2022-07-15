$(function(){
    $(".works__slider").slick({
        dots: true,
        arrows: true,
        speed: 1000,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        accessibility: false,
    });

    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu-body,.header__logo,.header__socials').toggleClass('active');
        $('body').toggleClass('lock');
    });
})