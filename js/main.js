$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="left">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="right">',

        responsive: [
            {
                breakpoint: 1521,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    arrows: false,
                }
            },
        ]
    });


});

// Type Image Zoom - картинка с анимацией
$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});

// Диалоговое окно
$('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
});
$(document).on('click', '.popup-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});


// Type Iframe - видео Youtube (или Vimeo), карты Гугл или другой контент в iframe
$('.popup-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
            }
        }
    }
});
