//숫자표기법
let millionaire = 1000000000;
let myNumber = 1e9; //지수 표기법

console.log(millionaire === myNumber);
console.log(millionaire);
console.log(myNumber);

//지수표기법 활용
console.log(25e5 === 2500000);
console.log(5.2e6 === 5200000);
console.log(-6.1e8 === -610000000);

//알바펫 e음수면 10의 음수승 나누기
console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-6 === -0.0000091);

//16진수(hexadecimal)
let hex1 = 0xff; // 255
let hex2 = 0xFF; // 255

//8진수(octal)
let octal = 0o377; // 255

//2진수(binary)
let binary = 0b11111111; // 255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);
