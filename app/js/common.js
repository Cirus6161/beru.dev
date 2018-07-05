$(document).ready(function () {
    $('.brands-adaptive-slider').on("init", function () {

        setTimeout(function () {
            $(".brands").slideUp(0);

            console.log("4");
        }, 1500);

    /*SLICK-SLIDER*/
    $('.slider-for').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });


    $('.search-result-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive:[{
            breakpoint: 768,
            settings:{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });

    $('.staff-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive:[{
            breakpoint: 768,
            settings:{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });

    $('.managment-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive:[{
            breakpoint: 768,
            settings:{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });

    $('.news-block-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive:[{
            breakpoint: 768,
            settings:{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });


    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    focusOnSelect: true,
                    vertical: false,
                    verticalSwiping: true,
                }}
        ]
    });





    });





    /*adaptive-slider*/

    $('.brands-adaptive-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }}
        ]
    });


    /*!adaptive-slider*/


    /*!SLICK-SLIDER*/










$("#brands-list, #brands-list-mm").click(function (event) {
    event.preventDefault();
    $(".brands").slideToggle();
});

/*!BRAND-TOGGLE*/

/*CATALOG-TOGGLE*/

$("#catalog-list").click(function (event) {
    event.preventDefault();
    $(".catalog-div").slideToggle();
});

$("#news-cat").click(function (event) {
    event.preventDefault();
    $(".news-cat").fadeToggle();
});

/*!CATALOG-TOGGLE*/

/*CLIENTS-TOGGLE*/

$(".tabs-nav-link").on('click',(function (event) {
    event.preventDefault();
    var context = $(this);
    if(context.hasClass('active')){
        return false;
    }
    var target = context.data('target');
    console.log(target);
    $(".tabs-nav-link").removeClass('active');
    context.addClass('active');
    $(".tabs-tab-body").fadeOut(0);
    $(target).fadeIn();

}));


/*!CLIENTS-TOGGLE*/







/*MY-MENU*/

$("#my-menu").mmenu({

    /*onClick: {
        close: true,
        setSelected : false,
        preventDefault:true
    },*/
    "extensions": [
        "pagedim-black",
        "position-right",
        "theme-black",
        "position-front"
    ]

});

var api = $('#my-menu').data('mmenu');

api.bind('open:start', function() {
    $('.hamburger').addClass('is-active');

});
api.bind('close:finish', function() {
    $('.hamburger').removeClass('is-active');
});

$("#close-menu, #brands-list-mm").on('click', function () {
   api.close()
});





/*!MY-MENU*/

/*NICE-SCROLL*/



/*!NICE-SCROLL*/
});