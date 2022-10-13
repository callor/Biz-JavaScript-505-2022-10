/*
 어딘가의 기억장소에 숫자 30을 저장하고
 그 기억장소에 저장된 값을 화면에 write 하라
 */
document.write(30);
document.write(" + ");
document.write(40);
document.write(" = ");
document.write(30 + 40);
document.write("<br/>");

/**
 * 변수의 사용
 * 데이터를 저장할 기억장소에 이름을 부착하여
 * 재활용하기 위한 조치
 *
 */
// num1, num2 라는 기억장소에 각각 30, 40 의 데이터를 보관하라
const num1 = 30;
const num2 = 40;
// num1, num2 라는 기억장소에 보관중인 데이터를 사용하여
// 덧셈 연산을 화면에 보여라
document.write(num1);
document.write(" + ");
document.write(num2);
document.write(" = ");
document.write(num1 + num2);
document.write("<br/>");

// num1, num2 에 보관된 데이터를 덧셈하여
// 그 결과를 sum 변수에 보관하라
const sum = num1 + num2;

// 덧셈결과가 보관된 sum 변수의 내용을
// 화면에 보여라
document.write("덧셈결과 : " + sum);
