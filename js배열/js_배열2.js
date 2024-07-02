// 배열 다루기
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);


members[5] = 'NiceCodeit'; //요소 추가
console.log(members[5]);

members[4] = '달토끼'; //요소 수정
console.log(members[4]);

//배열의 요소를 삭제하려면

/*
members[6] = 'NiceCodeit';
console.log(members[5]);
members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle', empty, 'NiceCodeit'] 하나의 요소로 생성
*/