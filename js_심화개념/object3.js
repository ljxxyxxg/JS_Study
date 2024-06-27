// 객체 프로퍼티 수정, 추가, 삭제하기

let codeit = {//property Name :prperty value(모든자료형 값 사용가능) 키:값
    name: '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
        //객체 안에 객체 사용가능
    }
};

// console.log(codeit.ceo);
// codeit.ceo = '김영훈';//프로퍼티 추가
// console.log(codeit.ceo);


// console.log(codeit.worstCourse);
// delete codeit.worstCourse;//프로퍼티 삭제
// console.log(codeit.worstCourse);


console.log(codeit.name !== undefined);//프로퍼티 존재여부 확인

//'propertyName' in objectName
console.log('name' in codeit); //in 연산자를 사용하여 프로퍼티 존재여부 확인(boolean값 반환)
                               //undefined값이 할당 될 수 있기 때문에 in 연산자 사용

if ('name' in codeit){
    console.log(`name ${codeit.name}입니다.`);
} else {
    console.log('name 프로퍼티가 없습니다.');
}