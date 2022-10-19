/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을
 * 출력하기
 */
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const btnOk = document.querySelector("button.btn_ok");

const index = {
  이름: 0,
  주소: 1,
  전화: 2,
};
btnOk?.addEventListener("click", () => {
  spans[index.이름].innerText = inputs[index.이름].value;
  spans[index.주소].innerText = inputs[index.주소].value;
  spans[index.전화].innerText = inputs[index.전화].value;
});
