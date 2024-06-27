// 자바스크립트의 모든것이 다 객체다.
// 여러가지 값을 한번에 저장( object )


console.log(typeof {//property Name :prperty value(모든자료형 값 사용가능) 키:값
    'brand Name': '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
        //객체 안에 객체 사용가능
    }
})

// typeof 연산자 : 자료형의 구조를 문자열로 리턴해주는 연산자
/*
    Property Name 주의사항
    1. 첫번째 글자는 반드시 문자, 밑줄(_), 달러($)중 하나로 시작!
    2. 띄어쓰기 금지!
    3. 하이픈(-) 금지!
    반드시 ''로 감싸줘야함
*/