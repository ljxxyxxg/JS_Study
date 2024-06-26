
// //1. 반복문예제 1이상 100이하의 홀수 출력하기
// let i = 1;

// while (i < 100) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// //모범답안
// let i = 1;

// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }


// //2. 정수 180의 약수를 모두 출력하고 총 몇개인지 출력하기
// const N = 180;
// let i = 1; // 약수를 구하기 위한 변수
// let count = 0; // 약수의 개수를 세기 위한 변수


// while (i <= N) {
//   if (N % i === 0) {
//     console.log(i);
//     count++;
//   }
//   i++;
// }

// console.log(`180의 약수는 총 ${count}개입니다.`); // 180의 약수는 총 18개입니다.

//모범답안
const N = 180;
let i = 1;
let count = 0;

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i += 1;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`);
