/**
 * nav 의 메뉴를 클릭했을때
 * 구글, 네이버, 다음을 클릭하면
 * alert("구글"), alert("네이버"), alert("다음")을
 * 띄우시오
 */

const mainNav = document.querySelector("nav.main_nav");

mainNav?.addEventListener("click", (tag) => {
  const target = tag.target;
  if (target.tagName === "LI") {
    const text = target.innerText;
    if (text === "구글") {
      // 현재 화면을 https://google.com 을 가져와서
      // 덮어쓰기하여 보여라
      document.location.href = "https://google.com";
    } else if (text === "네이버") {
      document.location.href = "https://naver.com";
    } else if (text === "다음") {
      // 새로운 창을 열고 https://daum.net 가져와서
      // 보여라
      window.open("https://daum.net");
    } else if (text === "About") {
      document.location.href = "sub/about07.html";
    }
  }
});
