/**
 * 1. 이름, 주소, 전화번호를 입력한 후
 *      추가 버튼을 클릭하면
 *      입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI 를 각자 디자인
 */
const inputs = document.querySelectorAll("input");
const tbodyAddr = document.querySelector("tbody.addr");
const btnAdd = document.querySelector("button.add");

btnAdd?.addEventListener("click", () => {
  const tr = document.createElement("TR");
  /**
   * input box 여러개를 SelectAll() 가져와서
   * 배열에 보관하고
   * input 배열의 개수만큼 for() 반복문을 수행하면서
   * 각각 td 를 생성하고 생성된 td를 tr에 추가하기
   */
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    td.innerText = inputs[i].value;
    tr.appendChild(td);
    inputs[i].value = "";
  }
  tbodyAddr.appendChild(tr);
  inputs[0].focus();
});
