/**
 * JS 에서 변수를 선언하는 방법
 * const, let 키워드로 시작하는 방법
 *
 * const 변수명 = 값
 *      한번 값을 보관하면 다른 값을 보관할수 없다
 *
 * let 변수명 = 값
 *      값이 보관된 변수에 다른 값을 보관하면
 *      원래 저장된 값은 사라진다
 *      그리고 새롭게 보관한 값만 남아 있다
 */
const num1 = 30;
const num2 = 40;

document.write(num1 + ", ");
document.write(num2);
document.write("<br/>");

let num3 = 100;
let num4 = 200;

document.write(num3 + ", ");
document.write(num4);
document.write("<br/>");

num3 = 50;
num4 = 60;
document.write(num3 + ", ");
document.write(num4);
document.write("<br/>");
