'use strict'

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

let header__main = document.querySelector('.header__main');
let header__btn = document.querySelector('.header__btn');
let close = document.querySelector('.close');
let form = document.querySelector('.form');


header__btn.addEventListener('click', function(e){
    form.classList.add('active');
});

close.addEventListener('click', function(e){
    form.classList.remove('active');
})

window.addEventListener('click', function(e){
    if(e.target == header__main){
        form.classList.remove('active');
    }
})