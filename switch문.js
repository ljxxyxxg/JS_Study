// switch문 (switch statement)
/**
 * 당신은 등산을 하던 중 갑작스레 산불이 발생해 대피중 입니다.
 * 그러던 중 산중턱에서 다친 동물 4마리를 만났습니다.
 * 이미 체력이 많이 떨어진 당신,
 * 이 동물 중 단 한마리만 구출 할 수 있습니다.
 * 과연 당신의 선택은?
 * 1.토끼 2.고양이 3.코알라 4.강아지
 */

// switch (비교할_값) {
//     case 조건값1:
//         동작부분
//         break;
//     case 조건값2:
//         동작부분
//         break;
//     case 조건값3:
//         동작부분
//         break;
//     case 조건값4:
//         동작부분
//         break;
//     default:
//         동작부분;
// }

let myChoice = 2;

switch (myChoice) {
    case 1:
        console.log("당신은 토끼를 선택한 당신, ...");
        break;
    case 2:
        console.log("당신은 고양이를 선택한 당신, ...");
        break;        
    case 3:
        console.log("당신은 코알라를 선택한 당신, ...");
        break;        
    case 4:
        console.log("당신은 강아지를 선택한 당신, ...");
        break;
    default:
        console.log("1에서 4 사이의 숫자를 선택해 주세요.");
} //switch문은 break를 만나기전까지 작동하므로 break를 제거하면 밑에 모든 문이 다 나온다