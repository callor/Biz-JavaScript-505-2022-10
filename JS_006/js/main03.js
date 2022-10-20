const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0 ~ 100 점 범위를 벗어나면
 * 점수가 잘못 입력되었다 는 alert 을 띄우고
 * 다시 점수를 입력받기
 */
const scoreCheck = () => {
  const inputKor = document.querySelector("input[name='sc_kor']");
  const inputEng = document.querySelector("input[name='sc_eng']");
  const inputMath = document.querySelector("input[name='sc_math']");

  if (!inputKor.value) {
    alert("국어 점수를 입력하세요");
    inputKor.focus();
  } else if (Number(inputKor.value) < 0 || Number(inputKor.value) > 100) {
    alert("국어 점수는 0 ~ 100까지 범위에서 입력하세요");
    inputKor.focus();
    // 영어점수
  } else if (!inputEng.value) {
    alert("영어 점수를 입력하세요");
    inputEng.focus();
  } else if (Number(inputEng.value) < 0 || Number(inputEng.value) > 100) {
    alert("영어 점수는 0 ~ 100까지 범위에서 입력하세요");
    inputEng.focus();
    // 수학점수
  } else if (!inputMath.value) {
    alert("수학 점수를 입력하세요");
    inputMath.focus();
  } else if (Number(inputMath.value) < 0 || Number(inputMath.value) > 100) {
    alert("영어 점수는 0 ~ 100까지 범위에서 입력하세요");
    inputMath.focus();
  } else {
    return true;
  }
  return false;
};

const scoreInput = () => {
  const tr = document.createElement("TR");

  let sum = 0;
  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
    // input tag 의 name 속성이 sc_num 가 아니고
    // sc_name 도 아닐 경우에만 sum 에 누적하기
    if (input.name !== "sc_num" && input.name !== "sc_name") {
      sum += Number(input.value);
    }
  });
  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);
  tbodyScore.appendChild(tr);
};

// btnAdd?.addEventListener("click", scoreInput)
btnAdd?.addEventListener("click", () => {
  // scoreCheck() 함수를 실행하여 return 값이 true 인경우
  // scoreInput() 함수를 실행하여 데이터를 추가하라
  if (scoreCheck()) {
    scoreInput();
  }
});
