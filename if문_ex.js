// // 1. 파라미터 height을 활용하는 checkHeight 함수를 완성하세요
// function checkHeight(height) {
//     if (height >= 140) {
//         console.log('탑승이 가능합니다.');
//     } else {
//         console.log('탑승이 불가능합니다.');
//     }
// }

// // 테스트 코드
// checkHeight(140);
// checkHeight(135);
// checkHeight(170);

// // 모범답안
// function checkHeight(height) {
//     const LIMIT = 140;
//     let passMessage = '탑승이 가능합니다.';
//     let failMessage = '탑승이 불가능합니다.';
  
//     if (height >= LIMIT) {
//       console.log(passMessage);
//     } else {
//       console.log(failMessage);
//     }
//   }
  
//   // 테스트 코드
//   checkHeight(140);
//   checkHeight(135);
//   checkHeight(170);


  // 2. 학점계산기 문제
  function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
    if (totalScore >= 90) {
        console.log('A');
    } else if (totalScore >= 80) {  //else if문으로 넘어왔다는 것은 앞선 if문의 조건을 통과하지 못했다는 뜻입니다. 그러니까 점수가 90점 미만일 수밖에 없다는 거죠.
        console.log('B');
    }   else if (totalScore >= 70) {
        console.log('C');
    }   else if (totalScore >= 60) {
        console.log('D');
    }   else {
        console.log('F');
    }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


//3. 나의 나이와, 나의 성별을 저장하는 변수 *다시풀어보기*
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
    if (myAge === yourAge) {
        return callFriend;
    } else if (myAge > yourAge) {
        if (yourGender === 'male') {
            return callYoungerBrother;
        } else {
            return callYoungerSister;
        }
    } else {
        if (yourGender === 'male') {
            return callOlderBrother;
        } else {
            return callOlderSister;
        }
    }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1); // 여동생
console.log(result2); // 남동생
console.log(result3); // 친구
console.log(result4); // 형
console.log(result5); // 누나