var navToggleBtn = $('.nav-toggle-btn');
var navTop = $('nav.navigation-on-top');
var navHeight = navTop.innerHeight();
var navBody = $('.navigation-on-top > .navigation-body');

$(function () {
    navToggleBtn.click(function () {
        if (navTop.hasClass('nav-open')) {
            closeNavSmaller();
        }
        else {
            openNavSmaller();
            registerNavClickOutside();
        }
    });
});
function closeNavSmaller() {
    navTop.removeClass('nav-open');
    navTop.css("height", navHeight);
}
function openNavSmaller() {
    navHeight = navTop.innerHeight();
    navTop.addClass('nav-open');
    var navOpen = $('.navigation-on-top.nav-open');
    navOpen.css("height", navBody.innerHeight());
}
function registerNavClickOutside() {
    $(window).on('click', function (e) {
        if (!$(e.target).parents("nav.navigation-on-top").length) {
            closeNavSmaller();
        }
    });
}
