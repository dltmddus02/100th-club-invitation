document.addEventListener("DOMContentLoaded", () => {
  // DOM이 완전 로드되고 파싱된 후에 진행...
  //   const realSize = window.innerWidth;
  //   document.body.style.width = `${realSize}px`;
  const outer = document.querySelector(".outer");
  const innerList = document.querySelector(".inner-list");
  const inners = document.querySelectorAll(".inner");
  let currentIndex = 0;

  const updateSizes = () => {
    const realSize = window.innerWidth;
    document.body.style.width = `${realSize}px`;
    inners.forEach((inner) => {
      inner.style.width = `${outer.clientWidth}px`;
    });
    innerList.style.width = `${outer.clientWidth * inners.length}px`;
  };

  // 초기 설정
  updateSizes();

  // 창 크기 조절할 때마다 실행
  window.addEventListener("resize", updateSizes);

  // 버튼에 이벤트 등록하기
  const buttonLeft = document.querySelector(".button-left");
  const buttonRight = document.querySelector(".button-right");

  buttonLeft.addEventListener("click", () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    clearInterval(interval);
    interval = getInterval();
    console.log("왼쪽버튼클릭");
  });

  buttonRight.addEventListener("click", () => {
    currentIndex++;
    currentIndex =
      currentIndex >= inners.length ? inners.length - 1 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    clearInterval(interval);
    interval = getInterval();
  });

  // 주기적으로 화면 넘기기
  const getInterval = () => {
    return setInterval(() => {
      currentIndex++;
      currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
      innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    }, 2000); // 2s 간격
  };

  let interval = getInterval();
});
