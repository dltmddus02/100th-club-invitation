window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
var $html = $("html");
var page = 1;
var lastPage = $(".content").length;
//
$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();
  $html.animate({ scrollTop: posTop });
});

$(document).ready(function () {
  var lastScrollTop = 0;
  var elements = $("#scroll-image, #firework");

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      elements.addClass("show").removeClass("hide");
      setTimeout(function () {
        elements.addClass("hide").removeClass("show");
      }, 2000);
    }
    // else {
    // setTimeout(function () {
    // elements.addClass("hide").removeClass("show");
    // }, 2000);
    // }
    lastScrollTop = scrollTop;
  });
});
