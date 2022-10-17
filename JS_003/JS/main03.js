const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const result = document.querySelector("#result");

/**
 * 현재 문서에 클래스가 num1(.num1) 인 친구들 중에
 * span tag 들만 가져와서 num1s 배열에 보관하라
 */
const num1s = document.querySelectorAll("span.num1");
/**
 * 현재 문서에 클래스가 num2(.num2) 인 친구들 중에
 * span tag 들만 가져와서 num2s 배열에 보관하라
 */
const num2s = document.querySelectorAll("span.num2");

const results = document.querySelectorAll("span.result");

/**
 * 본문에 button tag 가 한개만 있기 때문에
 * 별도의 id 를 부착하지 않고 직접 tag 를 가져와서 변수에 보관
 */
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);

  num1s[0].innerText = intNum1;
  num1s[1].innerText = intNum1;
  num1s[2].innerText = intNum1;
  num1s[3].innerText = intNum1;

  num2s[0].innerText = intNum2;
  num2s[1].innerText = intNum2;
  num2s[2].innerText = intNum2;
  num2s[3].innerText = intNum2;

  results[0].innerText = intNum1 + intNum2;
  results[1].innerText = intNum1 - intNum2;
  results[2].innerText = intNum1 * intNum2;
  results[3].innerText = intNum1 / intNum2;

  // result box 의 display style 속성을 block 하여
  // 다시 보이도록 하여라
  result.style.display = "block";
});
