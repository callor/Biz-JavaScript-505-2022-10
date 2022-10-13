const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btnCacl = document.querySelector("button");

btnCacl?.addEventListener("click", () => {
  const num1 = inputNum1.value;
  const num2 = inputNum2.value;
  spanSum.innerText = num1 + num2;
});
