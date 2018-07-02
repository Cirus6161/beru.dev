/*BRAND-TOGGLE*/

$("#brands-list").click(function (event) {
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




/*SLICK-SLIDER*/
$('.slider-for').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true
});
/*!SLICK-SLIDER*/


/*MY-MENU*/

$("#my-menu").mmenu({

    onClick: {
        close: true,
        setSelected : false,
        preventDefault:false
    },
    "extensions": [
        "pagedim-black",
        "position-right",
        "theme-dark"
    ]
});

var api = $('#my-menu').data('mmenu');

api.bind('open:start', function() {
    $('.hamburger').addClass('is-active');

});
api.bind('close:finish', function() {
    $('.hamburger').removeClass('is-active');
});


/*!MY-MENU*/
