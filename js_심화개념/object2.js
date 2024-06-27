//객체 (Object)
let codeit = {//property Name :prperty value(모든자료형 값 사용가능) 키:값
    'brand Name': '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
        //객체 안에 객체 사용가능
    }
};

/*
// 점 표기법 (objectName.propertyName)
console.log(codeit.isVeryNice); // 객체의 프로퍼티 값에 접근하는 방법 '
                                //ex)'born Year'로 감싸진 프로퍼티에는 접근 불가
//대괄호 표기법 (objectName['propertyName'])
console.log(codeit['born-Year']);

//변수의 담긴 값도 활용가능
let propertyName = 'brand Name';
console.log(codeit[propertyName]);*/

//객체 안에 객체가 있는 경우
console.log(codeit.bestCourse.title);