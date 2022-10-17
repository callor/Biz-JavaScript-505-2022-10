const nums = [3, 5, 1, 2, 3, 4, 5, 6, 7, 6];
// nums 배열에 담긴 각각 요소의 값을 console 에 출력
console.log("첫 번째 : ", nums[0]);
console.log("두 번째 : ", nums[1]);
console.log("세 번째 : ", nums[2]);
console.log("네 번째 : ", nums[3]);
console.log("다섯 번째 : ", nums[4]);
console.log("여섯 번째 : ", nums[5]);

let index = 0;
console.log("첫 번째 : ", nums[index++]);
console.log("두 번째 : ", nums[index++]);
console.log("세 번째 : ", nums[index++]);
console.log("네 번째 : ", nums[index++]);
console.log("다섯 번째 : ", nums[index++]);
console.log("여섯 번째 : ", nums[index++]);

for (let i = 0; i < 10; i++) {
  console.log(i + 1, " 번째", nums[i]);
}

// 배열의 개수에 관계없이 전체 요소를 출력하기
for (let i = 0; i < nums.length; i++) {
  console.log(i + 1, " 번째", nums[i]);
}

// nums 배열에 담긴 숫자들의 합을 구하여 출력
let sum = 0;
sum += nums[0];
sum += nums[1];
sum += nums[2];
sum += nums[3];

sum = 0;
for (let i = 0; i < 10; i++) {
  sum += nums[i];
}
console.log("결과", sum);

sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("결과", sum);
