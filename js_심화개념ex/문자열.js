//String
let myString = ' Hi, I am a string ';

//요소 탐색
console.log(myString.indexOf('i')); // 11
console.log(myString.lastIndexOf('i')); // 10

// 대소문자 변환
console.log(myString.toUpperCase()); // HI, I AM A STRING   
console.log(myString.toLowerCase()); // hi, i am a string

// 양 끝 공백 제거 
console.log(myString.trim()); // Hi, I am a string

//요소접근
console.log(myString.charAt(3)); // charAt 메소드I   
console.log(myString[3]); // 대괄호 표기법\

// 문자열 길이
console.log(myString.length); // length 프로퍼티

//부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // Hi
console.log(myString.slice(3)); // , I am a string  
console.log(myString.slice());  // Hi, I am a string