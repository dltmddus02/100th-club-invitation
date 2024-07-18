$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-image, #firework-1, #firework-2")
      .addClass("show")
      .removeClass("hide");
  } else {
    setTimeout(function () {
      $("#scroll-image, #firework-1, #firework-2")
        .addClass("show")
        .removeClass("hide");
    }, 2000);
  }
});
