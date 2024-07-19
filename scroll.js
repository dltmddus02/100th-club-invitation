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
// let num = 0;
// let idx = 0;
// let delta;

// const MainTit = document.querySelector(".main-tit-1");

// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 100) {
//     MainTit.style.display = "block";
//   } else {
//     MainTit.style.display = "none";
//   }
// });

// function handleWheel(e) {
//   var delta = e.deltaY || e.detail || e.wheelDalta;
//   handleScroll(delta);
// }

// function handleTouch(e) {
//   if (e.type == "touchstart" && e.touches && e.touches[0]) {
//     touchStartY = e.touches[0].clientY;
//   } else if (e.type == "touchmove" && e.touches && e.touches[0]) {
//     var touchEndY = e.touches[0].clientY;
//     var delta = touchStartY - touchEndY;
//     touchStartY = touchEndY;
//     handleScroll(delta);
//   }
// }

// function handleScroll(delta) {
//   if (delta > 0) {
//     // 스크롤 아래로 내릴 때
//     if (!(num == 12)) {
//       num++;
//     }
//   }
// }

// $(window).on("scroll", function () {
//   var elements = $("#scroll-image, #firework");
//   if ($(this).scrollTop() > 100) {
//     elements.addClass("show").removeClass("hide");
//     setTimeout(function () {
//       elements.addClass("hide").removeClass("show");
//     }, 2000);
//   } else {
//     setTimeout(function () {
//       elements.addClass("hide").removeClass("show");
//     }, 2000);
//   }
// });
