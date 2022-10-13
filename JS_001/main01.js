// html 화면에 div tag 중에 id div1 인 요소를 가져와서
// div1 에 보관하라
const div1 = document.querySelector("div#div1");
const div2 = document.querySelector("div#div2");
const div3 = document.querySelector("div#div3");

div1.innerText = "우리나라만세";

div1.addEventListener("click", () => {
  div1.innerText = "Welcome";
});

div2.addEventListener("click", () => {
  div2.style.backgroundColor = "#AAA";
});

div3.addEventListener("click", () => {
  div3.style.textAlign = "right";
});
