const divs = document.querySelectorAll("section.main div");
const btnRefresh = document.querySelector("button");
const nums = [];

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    const rndNum = Math.floor(Math.random() * 100) + 1;
    nums[i] = rndNum;
  }
};

for (let index = 0; index < nums.length; index++) {}
/**
 * forEach의 num 와 index 매개변수
 * num 매개변수 : nums 배열의 각 위치별 요소 값을 담고 있는 변수
 * index 매개변수 : forEach() 가 반복되는 동안
 *      0 ~ 배열개수 - 1 숫자를 자동으로 count 하여
 *      {} 내부에서 사용할수 있도록 만들어진 변수
 */
const viewNums = () => {
  nums.forEach((num, index) => {
    divs[index].textContent = num;
  });
};

makeNums();
viewNums();

btnRefresh?.addEventListener("click", () => {
  makeNums();
  viewNums();
});
