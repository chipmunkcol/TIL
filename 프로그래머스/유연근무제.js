function solution(schedules, timelogs, startday) {
  let result = 0;

  //     schedules
  //     timelogs 시간을 정수로 표헌 (시 * 100 + 분) 10분까지 지각 인정
  //     startday 을 기준으로 1주일만 산정 (6 = 토, 7 = 일)

  for (let i = 0; i < schedules.length; i++) {
    const 희망출근시간 = schedules[i];
    // const 인정출근시간 = 희망출근시간 + 10; (설정 오류!)
    const Hour = Math.floor(희망출근시간 / 100);
    const Minute = 희망출근시간 - Hour * 100;
    const date = new Date(`2000-1-1 ${Hour}:${Minute}`);
    const datePlus10Minute = new Date(date.setMinutes(date.getMinutes() + 10));
    const newHour = datePlus10Minute.getHours();
    const newMinute = datePlus10Minute.getMinutes();
    const 인정출근시간 = newHour * 100 + newMinute;

    let 출근시작날짜 = startday;

    let 정시출근횟수 = 0;
    const 직원별timelogs = timelogs[i];
    [1, 2, 3, 4, 5, 6, 7].forEach((_, index) => {
      const 실제출근시간 = 직원별timelogs[index];
      if (출근시작날짜 === 6) {
        출근시작날짜 = 출근시작날짜 + 1;
        return;
      }
      if (출근시작날짜 === 7) {
        출근시작날짜 = 1;
        return;
      }

      if (실제출근시간 <= 인정출근시간) {
        정시출근횟수 = 정시출근횟수 + 1;
      }
      출근시작날짜 = 출근시작날짜 + 1;
    });

    if (정시출근횟수 === 5) {
      result = result + 1;
    }
  }

  return result;
}

solution(
  [700, 800, 1100],
  [
    [710, 2359, 1050, 700, 650, 631, 659],
    [800, 801, 805, 800, 759, 810, 809],
    [1105, 1001, 1002, 600, 1059, 1001, 1100],
  ],
  5
);
