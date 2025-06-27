let result = [];
let queue = [];

// 처음 k일까지는 모든 점수가 명예의 전당에 올라감
for (let i = 0; i < k; i++) {
  const score = scores[i];
  queue.push(score);
  const minScore = Math.min(...queue);
  result.push(minScore);
}

// k일 이후부터는 조건에 따라 명예의 전당 업데이트
for (let i = k; i < scores.length; i++) {
  const score = scores[i];
  const minScore = Math.min(...queue);

  if (score <= minScore) {
    // 새 점수가 최하위보다 낮거나 같으면
    result.push(minScore); // 기존 최하위 점수 유지
  } else {
    // 새 점수가 최하위보다 높으면
    const targetIndex = queue.indexOf(minScore);
    queue.splice(targetIndex, 1, score); // 최하위 제거하고 새 점수 추가
    result.push(Math.min(...queue));
  }
}

return result;
