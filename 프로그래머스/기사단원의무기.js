function solution(number, limit, power) {
    // 공력력 제한을 초과한 무기는 패널티 성격으로 power 값에 맞춘다
    // 약수의 갯수 구하는 방법 (1과 나누어서 나머지가 0인 것들)
    const 약수의갯수Array = []
    for (let i = 1; i <= number; i++) {
        약수의갯수Array.push(get약수의갯수(i))
    }

    const 재배치 = 약수의갯수Array.map(v => v > limit ? power : v);
    return 재배치.reduce((acc, val) => acc + val, 0)

}

function get약수의갯수(num) {
    if (num === 1) return 1;
    const 약수 = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            약수.push(i);
            약수.push(num / i);
        }
    }
    const 약수중복제거 = new Set(약수);
    return 약수중복제거.size
}

console.log("🚀 ~ solution(5, 3, 2):", solution(10, 3, 2))
