function solution(a, b, n) {
  //     a 콜라 받기 위해 마트에 줘야 되는 병 수
  //     b 빈 병 a개 가져다 주면 마트가 주는 병 수
  //     n 가지고 있는 빈 병의 수

  //     n을 a로 나눈 몫과 나머지 => 받은 병 b * 몫
  //     n(받은 병 b * 몫 + 나머지) 을 a 로 나눈 몫과 나머지
  //     재귀함수로 풀면 될듯
  return 재귀함수(a, b, n);
}

function 재귀함수(a, b, n, res = 0) {
  if (a > n) return res;
  const 몫 = Math.floor(n / a);
  const 나머지 = n % a;
  const 받은병 = b * 몫;
  const 남은병 = 받은병 + 나머지;
  res += 받은병;
  return 재귀함수(a, b, 남은병, res);
}
