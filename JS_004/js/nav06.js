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
    if (text !== "Home" && text !== "About") {
      alert(text);
    }
  }
});
