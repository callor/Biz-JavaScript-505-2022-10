const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const info = {};
btnOk?.addEventListener("click", () => {
  info.이름 = inputs[0].value;
  info.주소 = inputs[1].value;
  info.전화번호 = inputs[2].value;
  document.writeln(info.이름, info.주소, info.전화번호);
});
