//1.반복문 구구단만들기
// for(i = 1; i <= 9; i++) {
//     for(j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// 다른답안
// let i = 1;
// while (i <= 9) {
//   let j = 1;
//   while (j <= 9) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// 피보나치 수열    
let a = 1;
let b = 1;

console.log(a); // 첫 번째 항 출력
console.log(b); // 두 번째 항 출력

for (let c = a + b; c <= 12586269025; c = a + b) {
    console.log(c); // 다음 항 출력
    a = b;
    b = c;
}

// 모범답안
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}
