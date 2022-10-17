/**
 * 배열(Array)
 * 한개의 변수에 다수의 데이터를 보관(저장)하기 위한 설정
 * querySelectAll() 을 사용하여 tag 들이나 class 로 설정된 항목을
 * 가져오면 자동으로 배열이 만들어지고 각각의 요소에
 * 값들이 보관 된다
 */
// 숫자 6개를 보관하는 배열을 만들고
// 각각의 요소에 0,1,2,3,4,5 의 값을 저장한다
const nums = [0, 1, 2, 3, 4, 5];

// nums 배열의 각 요소에 저장된 값을 읽기
// nums[0] : nums 배열의 0번째에 저장된 값이라는 표현
document.write(nums[0] + ", ");
document.write(nums[1] + ", ");
document.write(nums[2] + ", ");
document.write(nums[3] + ", ");
document.write(nums[4] + ", ");
document.write(nums[5] + ", ");
document.write("<br/>");

const strs = ["우리나라", "대한민국", "Republic of Korea"];

// 0 번 요소에 저장된 값을 읽기
document.write(strs[0]);
document.write("<br/>");
// 0 번 요소에 우리나라만세 라는 문자열을 저장(할당, 대입)
strs[0] = "우리나라만세";

// strs 배열은 const 로 선언되어 있기 때문에 배열에 어떤 값을
// 직접 대입, 저장 할수 없다
// strs = "우리나라만세";

document.write(strs[0]);
document.write("<br/>");
document.write(strs[4]);
document.write("<br/>");

// 배열.length : 배열의 개수를 저장하고 있는 속성
document.write(strs.length);
document.write("<br/>");

strs[4] = "KOREA";
document.write(strs[4]);
document.write("<br/>");
document.write(strs[3]);
document.write("<br/>");

document.write(strs.length);
document.write("<br/>");

strs.push("한국");
document.write(strs.length);
document.write("<br/>");
// strs[ strs.length - 1 ] : strs 배열의 마지막 요소를 가리킨다
document.write(strs[strs.length - 1]);
