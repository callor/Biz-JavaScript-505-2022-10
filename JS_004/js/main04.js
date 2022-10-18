const content = document.querySelector("#content");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");

const colors = ["red", "blue", "yellow"];
const colorChange = (index) => {
  content.style.backgroundColor = colors[index];
};
btnRed.addEventListener("click", () => {
  colorChange(0);
});
btnBlue.addEventListener("click", () => {
  colorChange(1);
});
btnYellow.addEventListener("click", () => {
  colorChange(2);
});
