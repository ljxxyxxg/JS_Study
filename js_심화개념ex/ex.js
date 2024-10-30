function interestCalculator(rate, payment, term) {
    // 납입 개월 수 계산 (term은 연 단위이므로 12를 곱합니다)
    const n = term * 12;
    
    // 이자 계산 공식 적용
    const interest = payment * n * (n + 1) / 2 * rate / 12;
    
    // 계산된 이자 출력 (소수점 아래 두 자리로 반올림)
    console.log(interest.toFixed(0));
}

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 2);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 2);