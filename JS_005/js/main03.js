/**
 * 객체(JSON, Javascript Object Notation)
 * 참고:객체지향 언어인 java, c++ 에서 언급하는 객체와
 * 약간 다른 개념으로 JS 에서는 사용된다
 *
 * JS에서 객체
 * 조각으로 구성된 변수들을 연관된 연결고리로
 * 한 묶음으로 묶어둔 것
 */
// 성적 : 객체(변수, Object, 묶음)
// 학번, 국어, 수학, 영어 : 요소변수, 속성(Property)
// 학번, 국어, 수학, 영어를 속성으로 갖는
//      성적 객체 선언
const 성적 = {
  학번: "001",
  국어: 80,
  수학: 77,
  영어: 65,
};
// 이름, 주소, 전화, 나이를 속성으로 갖는
// 홍길동 객체 선언
const 홍길동 = {
  이름: "홍길동",
  주소: "서울특별시",
  전화: "010-111-1111",
  나이: 33,
};

// 이름, 주소, 전화, 나이를 속성으로 갖는
// 이몽룡 객체 선언
const 이몽룡 = {
  이름: "이몽룡",
  주소: "익산시",
  전화: "010-222-2222",
  나이: 20,
};

document.writeln(성적.학번);
document.writeln(성적.국어);
document.writeln(성적.영어);
document.writeln(성적.수학);
document.writeln(성적.국어 + 성적.영어 + 성적.수학);
document.write("<br/>");

document.writeln(홍길동.이름);
document.writeln(홍길동.주소);
document.writeln(홍길동.전화);
document.write("<hr/>");

// 객체의 속성중 전화 속성의 데이터를 변경하기
홍길동.전화 = "062-333-3333";
document.writeln(홍길동.전화);
document.writeln(이몽룡.전화);
