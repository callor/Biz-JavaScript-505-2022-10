/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을
 * 출력하기
 */
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const btnOk = document.querySelector("button.btn_ok");

const index = {
  name: 0,
  addr: 1,
  tel: 2,
};

btnOk?.addEventListener("click", () => {
  spans[0].innerText = inputs[0].value;
  spans[index.name].innerText = inputs[index.name].value;

  // index 객체의 name 속성 값이 얼마나
  // index 객체의 name 속성에 저장된 값이 얼마나
  console.log(index.name);
  console.log("name", index["name"]);

  // index 객체의 addr 속성 값이 얼마나
  console.log("addr", index["addr"]);

  // input box 0 번(첫번째) tag 의 name 변수 이름을 가져오기
  const txtName = inputs[0].name;
  console.log(txtName);
  console.log(index[txtName]);

  // input box 의 name 변수 이름으로 index 객체로 부터 위치값을 찾고
  // 그 위치값으로 각각 요소를 매칭한다
  spans[index[txtName]].innerText = inputs[index[txtName]].value;

  // for() 반복문을 이용하여 input 전체 내용을 span 에 모두 보여주기
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum = i + 1;
  }
  console.log(sum);
});
