const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const result = document.querySelector("#result");
/**
 * 본문에 button tag 가 한개만 있기 때문에
 * 별도의 id 를 부착하지 않고 직접 tag 를 가져와서 변수에 보관
 */
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);
  result.innerHTML =
    intNum1 +
    " + " +
    intNum2 +
    " = " +
    (intNum1 + intNum2) +
    "<br/>" +
    intNum1 +
    " - " +
    intNum2 +
    " = " +
    (intNum1 - intNum2) +
    "<br/>";
});
