$(document).ready(function(){
    $(".icon-menu").click(function(event){
        $(this).toggleClass('active');
        $(".menu__body").toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(function(){
    $(".slider__inner").slick({
        dots: true,
        arrows: false,
        speed: 1300,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        accessibility: false,
    });
})


function ibg(){
    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();