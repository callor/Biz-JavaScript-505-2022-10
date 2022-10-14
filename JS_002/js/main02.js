const inputName = document.querySelector("#name");
const btnOk = document.querySelector("#btn");

// 누군가가 button 을 클릭하면
btnOk.addEventListener("click", () => {
  /**
   * 이름이 홍길동 이면
   * 안녕하세요 회원님 이라고 alert 을 띄우고
   * 아니면
   * 어서오세요 회원가입을 해 주세요 라고
   * alert 을 띄우자
   */
  const txtName = inputName.value;

  if (txtName === "") {
    alert("이름을 입력해 주세요");
    return;
  }

  if (txtName === "홍길동") {
    alert("안녕하세요 " + txtName + " 회원님");
  } else {
    alert("어서오세요 회원가입을 해 주세요");
  }
});
