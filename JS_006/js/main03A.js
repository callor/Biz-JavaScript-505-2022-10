const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0 ~ 100 점 범위를 벗어나면
 * 점수가 잘못 입력되었다 는 alert 을 띄우고
 * 다시 점수를 입력받기
 */
const scoreCheck = () => {
  for (let i = 2; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;

    if (!input.value) {
      alert(`${holderText} 점수를 입력하세요`);
    } else if (Number(input.value) < 0 || Number(input.value) > 100) {
      alert(`${holderText} 점수는 0 ~ 100까지 입력하세요`);
    } else if (!Number(input.value)) {
      alert(`${holderText} 점수는 숫자로만 입력하세요`);
    } else {
      // 다시 for() 다음번 코드를 실행하라
      // i 가 0 이었으면 i 1 인 경우의 코드를 실행하라
      // 여기에서 return 을 하면 첫번째 요소가 정상이면 나머지는
      // 검사를 하지 않아 버린다
      continue;
    }
    input.value = "";
    input.focus();
    return false;
  }
  return true;
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
