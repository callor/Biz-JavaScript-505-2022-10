const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;

  /**
   * input box 에 아무 값도 입력하지 않고
   * 확인을 누르면
   * 값을 입력하세요 라는 alert
   *
   * 0 이하의 값을 입력하면
   * 0 이상의 값을 입력하세요 라는 alert
   *
   * 0 보다 큰값이 입력되면 제곱을 계산하여 alert
   */

  // 입력박스에 값이 입력되지 않으면 alert 띄우고
  // 끝내기
  if (txtNum === "") {
    alert("값을 입력하세요");
    return;
  }

  const intNum = Number(txtNum);
  if (intNum <= 0) {
    alert("0 보다 큰 값을 입력하세요");
  } else {
    // alert(intNum * intNum);
    alert(intNum ** 2);
  }
});
