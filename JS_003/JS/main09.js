/**
 * 화면에 있는 6개의 span tag 에
 * 1 ~ 6까지 숫자를 표시
 */
const span = document.querySelectorAll("span");
span[0].innerText = 1;
span[1].innerText = 2;
span[2].innerText = 3;
span[3].innerText = 4;
span[4].innerText = 5;
span[5].innerText = 6;

for (let i = 0; i < span.length; i++) {
  span[i].innerText = i + 1;
}
