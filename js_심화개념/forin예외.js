//for...in 주의사항

/*
let myObject = {
    '2': '알고리즘의 정석',
    '3': '컴퓨터 개론',
    '1': '자바스크립트 프로그래밍 기초',
  };
  
  for (let key in myObject) {
    console.log(myObject[key]);
  }
  */

// 숫자형(양수) 프로퍼티 네임
let Object = {
    300: '정수',
    1.2: '소수',
  };
  
  for (let key in Object) {
    console.log(`${key}의 자료형은 ${typeof key}입니다.`);
  }
  

let myObject = {
    300: '정수',
    1.2: '소수',
  };
  
  console.log(myObject['300']);
  console.log(myObject['1.2']);
//   console.log(myObject.300); // Error!
//   console.log(myObject.1.2); // Error!
  
// 정수형 프로퍼티 네임
let my = {//객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.
    3: '정수3',
    name: 'codeit',
    1: '정수1',
    birthDay: '2017.5.17',
    2: '정수2',
  };
  
  for (let key in my) {//불가피한 경우에는 이런 객체의 정렬방식을 잘 이해한 상태에서 사용하고, 가급적 명확한 의미가 있는 프로퍼티 네임을 사용하시는걸 권장해 드립니다.
    console.log(key);
  }
