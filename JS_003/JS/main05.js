let num1 = 30;
document.writeln(num1);

// 변수에 값 할당(저장, 대입)
// 변수에 값을 저장하면 이전에 어떤 값이 저장되어있던지 상관없이
// 모두 clear 되고 새롭게 저장한 값만 보관된다
num1 = 40;
document.writeln(num1);
document.writeln("<br/>");

num1 = num1 + 10;
num1 = num1 + 10;
num1 = num1 + 10;
num1 = num1 + 10;
num1 = num1 + 10;
document.write(num1);

num1 = num1 + 1;
num1 = num1 + 1;
num1 = num1 + 1;
num1 = num1 + 1;
num1 = num1 + 1;

// num1 = num1 + 10 을 줄여서 표현하는 식
num1 += 10;

// num1 = num1 + 1
num1 += 1;

// num1 = num1 - 1
num1 -= 1;

// num1 = num1 * 2
num1 *= 2;

// num1 = num2 / 2
num1 /= 2;

// num1 변수의 값을 1 증가시켜라
num1 = num1 + 1;
num1 += 1;
num1++;
++num1;
// num1 ** : 불가능한 코드,
// 연속연산자(++, --, 증감연산자) 는 덧셈과 뺄셈만 가능

// num1 변수의 값을 1 감소시켜라
num1 = num1 - 1;
num1 -= 1;
num1--;
--num1;
