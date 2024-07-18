$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-image").fadeIn();
  } else {
    $("#scroll-image").fadeOut();
  }
});
