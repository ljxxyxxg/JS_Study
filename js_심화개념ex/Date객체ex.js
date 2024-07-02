//1. DateTime 입사일 문제

let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
    let timeDiff = today - startDate;
    let dayDiff = timeDiff / 1000 / 60 / 60 / 24;
    console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
	
}

workDayCalc(jaeSangStart);

// //모범답안
// let today = new Date(2112, 7, 24);
// let jaeSangStart = new Date(2109, 6, 1);

// function workDayCalc(startDate) {
//   // 여기에 코드를 작성하세요
//   let timeDiff = today.getTime() - startDate.getTime();
//   let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

//   console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
// }

// workDayCalc(jaeSangStart);
