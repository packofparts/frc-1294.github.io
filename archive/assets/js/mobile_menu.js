const $navButton = $("header span#nav-button")
const $navLinks = $("header nav#header-nav")
const $socialIcons = $("header ul#header-nav-social")
$navButton.click(function() {
    $navLinks.slideToggle();
    $socialIcons.toggleClass("visible");
})
