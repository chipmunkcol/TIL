function solution(numbers) {
  //     .0 .5 인 경우만 입력
  //     소수 부분을 어떻게 판단하지?

  const result = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

  const 정수부분 = Math.floor(result);
  console.log(정수부분);
  const 소수부분 = result - 정수부분;
  const 소수부분첫째자리 = String(소수부분).split(".")[1][0];
  console.log(소수부분첫째자리);

  if (소수부분첫째자리 === "0" || 소수부분첫째자리 === "5") {
    return 정수부분 + Number(소수부분첫째자리);
  } else {
    return 정수부분;
  }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 5.5
