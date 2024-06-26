// if문(if statement)은 주어진 조건이 참(true)이면, 하나 이상의 문을 실행하는 제어문이다.
let temperature = 145;

if (temperature <= 0) {
    console.log('물이 업니다.');
} else {
    if (temperature < 100) {
        console.log('물이 얼지도 끓지도 않습니다.');
    } else {
        if (temperature < 150) {    
        console.log('물이 끓습니다.');
        } else {
            console.log('물이 모두 수증기가 되었습니다.');
        }
    }
}

// 가독성 높이기
if (temperature <= 0) {
    console.log('물이 업니다.');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {    
    console.log('물이 끓습니다.');
} else {    
    console.log('무이 모두 수증기가 되었습니다.');
}