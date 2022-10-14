const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const btnCalc = document.querySelector("#btnCalc");
const spanSum = document.querySelector("#sum");

document.write("<br/>");
document.write(30 + 40);
document.write("<br/>");
document.write("30 + 40");
document.write("<br/>");
document.write("30" + "40");
document.write("<br/>");

// 30 + 40 = 70 이라고 표현하고 싶다
/**
 * 이 연산은
 * 1. "30 + 40 = " + 30 이 먼저 실행되면서
 *      숫자 30을 문자열 "30" 으로 변환한 후 연결한다
 * 2. "30 + 40 = 30" + 40 이 실행되면서
 *      숫자 40을 문자열 "40" 으로 변환한 후 연결한다
 * 결국 "30 + 40 = " + "30" + "40" 을 실행한 것과 같다
 * 즉, 문자열 + 숫자 또는 숫자 + 문자열 연산은
 * 숫자를 자동으로 문자열로
 *      형 변환(Type Converter)한다
 */
document.write("30 + 40 = " + 30 + 40);
document.write("<br/>");

document.write(30 + 40 + " 30과 40 덧셈결과");
document.write("<br/>");

/**
 * 30 + 40 = 70 의 원하는 결과를 얻기 위하여
 * 먼저 숫자 30 + 40의 연산을 괄호로 묶어
 * 연산 우선순위를 높여주면 된다
 * 1. 30 + 40 을 계산하여 70으로 만들고
 * 2. "30 + 40 = " + 70 을 연산한다
 * 3. "30 + 40 = " + "70" 과 같이 연산된다
 */
document.write("30 + 40 = " + (30 + 40));
document.write("<br/>");

btnCalc.addEventListener("click", () => {
  const txtNum1 = inputNum1.value;
  const txtNum2 = inputNum2.value;
  /**
   * Number()
   * 문자열형 숫자( "30" )를 wrapping 하여
   * 실제 숫자로 바꾸어 주는 함수(function)
   */
  const sum = Number(txtNum1) + Number(txtNum2);
  spanSum.innerText = sum;
});
