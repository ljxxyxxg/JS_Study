//숫자형 메소드 Number
let myNumber = 0.3591;

// toFixed: 소수점 아래의 자리수를 맞춰 고정(0~100)
console.log(Number(myNumber.toFixed(7))); // 0.359 (부족한 자리수는 0으로 채움)

//tip: +를 사용하면 문자열을 숫자로 변환 가능
console.log(+myNumber.toFixed(2)); // 0.36
//주의: toFixed는 문자열을 반환

// toString: 숫자를 문자열로 변환 (2~36진수)
let num = 255;
console.log(num.toString(16)); // ff (16진수)
console.log(num.toString(8)); // 377 (8진수)
console.log(num.toString(2)); // 11111111 (2진수)

//변수에 담지 않고 사용가능
console.log(255..toString(16)); // ff
console.log((255) .toString(8)); // 377