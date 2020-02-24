'use strict';

function categoryCarousel() {
    // var btnNext = $('.slider-controls_right'),
    //     btnPrev = $('.slider-controls_left')

    $('.block-category-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    // btnNext.click(function(){
    //     $(this).closest('.product-carousel').find('.product-carousel-wrapper').slick('slickNext')
    // });
    // btnPrev.click(function(){
    //     $(this).closest('.product-carousel').find('.product-carousel-wrapper').slick('slickPrev')
    // });
}
function headerSelect() {
    $('.header-select').select2({
        minimumResultsForSearch: Infinity,
        width: 'style',
        dropdownCssClass: 'header-select-inner'
    });
}

function textField() {
    $('.text-field').on('keyup', function () {
        var $this = $(this),
            val = $this.val();

        if (val.length >= 1) {
            $this.addClass('text-field_active');
            $this.siblings('.placeholder').hide();
        } else {
            $this.removeClass('text-field_active');
            $this.siblings('.placeholder').show();
        }
    });
}

$('.block-category-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1
});

function categoryCarousel() {

    $('.block-category-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1
    });
}

$(document).ready(function () {
    textField();
    headerSelect();
    categoryCarousel();
});