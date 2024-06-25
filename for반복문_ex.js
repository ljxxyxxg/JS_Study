// //1. for반복문
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// //2. for반복문 다른 문제 풀이
// for (let i = 2; i <= 100; i += 2) {
//         console.log(i);
// }


//3. for반복문 * 을 만들기
function printTriangle(height) {
    for (let i = 0; i < height; i++) {
      console.log('*');
    }
  }

  console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


function printTriangle(height) {
	for (let i = 1; i <= height; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
