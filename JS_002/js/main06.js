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
  // if(txtNum === "")
  if (!txtNum) {
    // 가
    alert("값을 입력하세요");
  } else if (Number(txtNum) <= 0) {
    // 나
    alert("0 보다 큰값을 입력하세요");
  } else {
    // 다
    alert(Number(txtNum) ** 2);
  }
  /**
   * 다중 if, 중첩 if, 다중 조건, 중첩 조건
   * 1. "가" 조건문이 실행되어 조건이 참인가 검사
   *    참이면(txtNum === "") "값을..." alert 띄우기
   * 2. "가" 조건문이 참이 아닌경우
   *    "나" 조건문이 실행되어 조건이 참인가 검사
   *    참이면(txtNum <= 0) "0 보다 큰..." alert 띄우기
   * 3. "가" 조건도 참이 아니고,
   *    "나" 조건도 참이 아니면
   *    txtNum 값을 제곱하여 alert 띄우기
   */
});
