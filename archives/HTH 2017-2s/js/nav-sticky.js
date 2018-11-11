var navigation = $(".navbar");
stickyNav = "navbar-sticky";

$( window ).on('load', function() {
    toggleNavIfScrolled(this);
});

$( window ).scroll(function() {
    toggleNavIfScrolled(this);
});

function toggleNavIfScrolled(window) {

    if( $(window).scrollTop() > $(window).height() ) {
        navigation.addClass(stickyNav);
    } else {
        navigation.removeClass(stickyNav);
    }
}
