const mainSection = document.querySelector("section.main");
const btnRefresh = document.querySelector("button");
const nums = [];

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};

const viewNums = () => {
  mainSection.textContent = "";
  nums.forEach((num) => {
    const div = document.createElement("DIV");
    div.textContent = num;
    mainSection.appendChild(div);
  });
};

const init = () => {
  makeNums();
  viewNums();
};

init();
btnRefresh?.addEventListener("click", init);
