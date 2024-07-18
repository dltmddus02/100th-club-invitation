$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-image, #fireworks-1, #fireworks-2")
      .addClass("show")
      .removeClass("hide");
  } else {
    setTimeout(function () {
      $("#scroll-image, #fireworks-1, #fireworks-2")
        .addClass("show")
        .removeClass("hide");
    }, 2000);
  }
});
