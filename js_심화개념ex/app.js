let sum = 0.1 + 0.2;

console.log(sum); // 0.30000000000000004
console.log(Number(sum.toFixed(1))); // 0.3
console.log(+sum.toFixed(1)); // 0.3

console.log(Math.round(sum * 10) / 10); // 0.3