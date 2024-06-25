// while문  (while statement)
// while (조건부분) { 
//     동작부분
// }

let i = 1; //전역변수 선언

while (i <= 10) { //while문은 초기화부분이 없기 때문에 전역변수로 선언해야한다
    console.log(`${i} 코드잇 최고!`);
    i++; //추가동작부분 동작부분 안에서 선언해야한다
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} 코드잇 최고!`);
// }