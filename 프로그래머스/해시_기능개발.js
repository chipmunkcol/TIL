function solution(progresses, speeds) {
  var answer = [];

  //     각 기능 당 걸리는 일수를 배열로 만든다
  const 경과일수arr = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let maxDay = 0;
  let count = 0;

  for (let day of 경과일수arr) {
    //
    if (day > maxDay) {
      if (count > 0) {
        answer.push(count);
      }
      maxDay = day;
      count = 1;
    } else {
      count++;
    }
  }

  if (count > 0) {
    answer.push(count);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
