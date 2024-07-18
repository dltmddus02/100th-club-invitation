$(window).on("scroll", function () {
  var elements = $("#scroll-image, #firework");
  if ($(this).scrollTop() > 100) {
    elements.addClass("show").removeClass("hide");
    setTimeout(function () {
      elements.addClass("hide").removeClass("show");
    }, 2000);
  } else {
    setTimeout(function () {
      elements.addClass("hide").removeClass("show");
    }, 2000);
  }
});
