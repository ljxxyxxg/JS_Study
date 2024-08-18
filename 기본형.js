// let x = 3;
// let y = x;

// console.log(x);
// console.log(y);
// y = 5;
// console.log(x);
// console.log(y);

let x = {name : 'John'};
let y = x;

console.log(x);
console.log(y);
y.birth = 2000;
console.log(x);
console.log(y);

// 이런 값이 나오는 이유는 객체는 참조형이기 때문에 같은 객체를 참조하고 있기 때문이다. 
// 객체와 같은 참조형 reference type은 값이 저장된 주소를 참조하기
// 기본형 primitive type ==> 변수 = 값
// 참조형 reference type ==> 변수 = 주소값