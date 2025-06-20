logo
코딩테스트 연습
PCCP 기출문제
[PCCP 기출문제] 1번 / 붕대 감기
다른 사람의 풀이
chipmunk chipmunk
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
function solution(bandage, health, attacks) {
  //     t 초 감으면서 1초마다 x 체력 회복
  //     t 초 연속으로 다 감으면 1초마다 x 체력 회복 + 보너스 y 체력 회복
  //     현재 체력 <= 최대 체력

  //     공격 당하면 연속 붕대 감는 시간이 0으로 초기화
  //     [시전 시간, x, y]

  //     반복문을 뭘로 돌릴꺼냐 attacks[attacks.length - 1][0];
  const 몬스터공격시간 = attacks.map((v) => v[0]);
  const 몬스터공격력 = attacks.map((v) => v[1]);
  const [시전시간, 초당회복, 보너스회복] = bandage;

  let 연속성공 = 0;
  let 현재체력 = health;

  for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
    if (몬스터공격시간.some((v) => v === i)) {
      const targetIndex = 몬스터공격시간.findIndex((v) => v === i);
      현재체력 -= 몬스터공격력[targetIndex];

      if (현재체력 < 1) {
          break;
      }

      연속성공 = 0;
      continue;
    }

    현재체력 += 초당회복;

    연속성공++;
    if (연속성공 === 시전시간) {
      현재체력 += 보너스회복;
      연속성공 = 0;
    }
    //         단 최대체력을 못넘긴다
    if (현재체력 > health) {
      현재체력 = health;
    }
  }

  return 현재체력 > 0 ? 현재체력 : -1;
}
