$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-image").fadeIn();
  } else {
    setTimeout(function () {
      $("#scroll-image").fadeOut();
    }, 2000);
  }
});
