function solutionSimple(n) {
    if (n < 2) return 0;

    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter(Boolean).length;
}

// 에라토스테네스의 체를 활용해야됨..

function solution(n) {
    //   n 나눠서 나머지가 0 이 아닌 값을 찾아야함
    //   소수는 1과 자기자신만을 약수로 가진 수 

    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (소수찾기(i)) {
            // console.log(i);
            count++;
        }
    }
    return count;
}

function 소수찾기(number) {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}