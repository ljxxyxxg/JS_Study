//내장 객체(자바스크립트 가지고 있는 객체)
//Date 객체
// let myDate = new Date();

// console.log(myDate);

// //new Date('YYYY-MM-DD') 형식으로 날짜를 입력하면 해당 날짜에 대한 Date 객체를 생성합니다.
// let myDate1 = new Date('1999-12-31');


// //new Date('YYYY-MM-DDTHH:mm:ss') 형식으로 날짜와 시간을 입력하면 해당 날짜와 시간에 대한 Date 객체를 생성합니다.
// let myDate2 = new Date('1999-12-31T23:59:59');

// console.log(myDate1);
// console.log(myDate2);

// // new Date(yyyy, mm, dd, hh, mm, ss, ms) 형식으로 년, 월, 일, 시, 분, 초, 밀리초를 입력하면 해당 날짜와 시간에 대한 Date 객체를 생성합니다.
// let myDate3 = new Date(1999, 11, 31, 23, 59, 59, 999); // 연도와 월까지는 필수로 작성 주의사항: month는 0부터 시작합니다. ex) 4를 입력하면 5월이 됩니다.

// //getTime 메소드 사용시 (1970년 1월 1일 00:00:00 UTC - > timestamp)부터 현재까지의 밀리초를 반환합니다.
// //Date.getTime()
// let myDate4 = new Date(2017, 4, 18, 19, 11, 16);

// console.log(myDate4.getTime());

//Date.getTime()
// let myDate5 = new Date(2017, 4, 18, 19, 11, 16);
// let today = new Date();

// let timeDiff = today.getTime() - myDate5.getTime();

// console.log(timeDiff + '밀리초');
// console.log(timeDiff + '초');
// console.log(timeDiff / 1000 / 60 + '분');
// console.log(timeDiff / 1000 / 60 / 60 + '시간');

// //Date.getTime()
// let myDate6 = new Date();

// console.log(myDate6.getFullYear());
// console.log(myDate6.getMonth());   // 0부터 시작합니다.
// console.log(myDate6.getDate());   // 일
// console.log(myDate6.getDay());   // 요일 0부터 시작합니다.
// console.log(myDate6.getHours());
// console.log(myDate6.getMinutes());
// console.log(myDate6.getSeconds());
// console.log(myDate6.getMilliseconds());

/*
//Date 수정(set)
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);

console.log(myDate);

//Date.now()
let myDate1 = new Date();

console.log(Date.now() === myDate1.getTime()); // true

//Date객체의 형변환
let myDate2 = new Date(2017, 4, 18);

console.log(typeof myDate2); // object
console.log(String(myDate2)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate2)); // 1495033200000
console.log(Boolean(myDate2)); // true
*/


// 중요
// let myDate3 = new Date(2017, 4, 18);

// console.log(myDate.getTime() === Number(myDate3)); // true

let myDate3 = new Date(2017, 4, 18);
let myDate4 = new Date(2017, 4, 19);

let timeDiff = myDate4 - myDate3;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)

