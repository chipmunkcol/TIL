function solution(chicken) {
    let coupon = chicken;
    let res = 0;

    while (coupon >= 10) {
        const bonus = Math.floor(coupon / 10);
        const remain = coupon % 10;

        coupon = bonus + remain;
        res += bonus;
    }

    return res;
}

// 재귀함수말고 반복문으로 풀어보자

// function solution(chicken) {
//     //     10로 나눈 몫 과 나머지
//     //     (몫 + 나머지) 10로 나눈 몫과 나머지
//     //     반복

//     return 재귀함수(chicken);

// }

// function 재귀함수(coupon, 치킨수 = 0) {
//     if (coupon < 10) return 치킨수;
//     const 몫 = Math.floor(coupon / 10);
//     const 나머지 = coupon % 10;
//     const 쿠폰 = 몫 + 나머지;
//     치킨수 = 치킨수 + 몫;
//     return 재귀함수(쿠폰, 치킨수)
// }