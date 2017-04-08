$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbar-toggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  function blinking_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}

setInterval(blinking_text, 1000);
});
