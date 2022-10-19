const spans = document.querySelectorAll("span");
const spanIndex = {
  이름: 0,
  주소: 1,
  전화: 2,
};
const 학생정보 = {
  이름: "홍길동",
  주소: "서울특별시",
  전화: "010-111-1111",
};
/**
 * span 를 배열로 가져와서
 * 각 요소 항목에 데이터를 보이는데
 * 요소 항목을 숫자 index 로 사용하는 것 보다는
 * 미리 index 객체를 생성해 두고
 * index 객체를 사용하여 요소 항목을 지정하는 것이
 * 좋다
 */
spans[spanIndex.이름].innerText = 학생정보.이름;
spans[spanIndex.주소].innerText = 학생정보.주소;
spans[spanIndex.전화].innerText = 학생정보.전화;
