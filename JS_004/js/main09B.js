const index = {
  username: 0,
  password: 1,
  rePassword: 2,
};
// username, password, re_password input box
// 변수에 보관
const joinInputs = document.querySelectorAll("input");
const username = joinInputs[index.username];
const password = joinInputs[index.password];
const rePassword = joinInputs[index.rePassword];

const btnSubmit = document.querySelector("button.btn_submit");

btnSubmit?.addEventListener("click", () => {
  const txtRePassword = rePassword.value;
  // if(username.value === "") : 보편적인 언어
  // JS 고유의 코드
  if (!username.value) {
    alert("아이디를 입력하세요");
    username.focus();
    return false;
  }
  if (!password.value) {
    alert("비밀번호를 입력하세요");
    password.focus();
    return false;
  }
  if (!txtRePassword) {
    alert("비밀번호 확인을 입력하세요");
    rePassword.focus();
    return false;
  }

  // 비밀번호와 비밀번호 확인 값(데이터)이 다르면
  if (password.value !== txtRePassword) {
    alert("비밀번호와 확인 값이 다릅니다 \n다시 확인해 주세요");
    password.value = "";
    rePassword.value = "";
    password.focus();
    return false;
  }

  // 서버로 데이터 전송하기
});
