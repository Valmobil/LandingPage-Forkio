// console.log("I am here")
$(document).ready(function(){
    // console.log("in carousel")
    $('.carousel__list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>'
});
});
