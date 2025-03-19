function solution(friends, gifts) {
  let result = 0;

  // 선물 지수를 계산할 객체 초기화
  let 선물지수 = {};

  // 각 친구의 선물 준 수와 받은 수를 계산
  for (let friend of friends) {
    선물지수[friend] = {
      given: 0,
      received: 0,
      giftIndex: 0,
    };
  }

  // 주고받은 선물 기록을 분석
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");

    // 선물 준 친구의 주고받은 수 증가
    선물지수[giver].given++;
    선물지수[receiver].received++;
  });

  // 각 친구의 선물 지수 계산
  for (let friend of friends) {
    선물지수[friend].giftIndex =
      선물지수[friend].given - 선물지수[friend].received;
  }

  // 다음 달에 받을 선물 수를 계산
  let nextMonthGifts = {};
  for (let friend of friends) {
    nextMonthGifts[friend] = 0;
  }

  // 주고받은 선물 관계를 기반으로 다음 달 받을 선물 수 조정
  for (let gift of gifts) {
    const [giver, receiver] = gift.split(" ");

    if (선물지수[giver].given > 선물지수[receiver].given) {
      nextMonthGifts[giver]++;
      nextMonthGifts[receiver]--;
    } else if (선물지수[giver].given < 선물지수[receiver].given) {
      nextMonthGifts[giver]--;
      nextMonthGifts[receiver]++;
    } else {
      // 주고받은 선물 수가 같을 경우 선물 지수로 결정
      if (선물지수[giver].giftIndex > 선물지수[receiver].giftIndex) {
        nextMonthGifts[giver]++;
        nextMonthGifts[receiver]--;
      } else if (선물지수[giver].giftIndex < 선물지수[receiver].giftIndex) {
        nextMonthGifts[giver]--;
        nextMonthGifts[receiver]++;
      }
    }
  }

  // 가장 많은 선물을 받을 친구의 선물 수를 찾기
  result = Math.max(...Object.values(nextMonthGifts));

  return result;
}

// 예시 테스트 케이스
console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
); // 2
console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
); // 4
console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
); // 0
