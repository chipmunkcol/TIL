// 1번 지표 RT
// 2번 지표 CF
// 3번 지표 JM
// 4번 지표 AN

// 점수가 같으면 사전순으로로
function solution(survey, choices) {
  let result = "";

  let temp = {};
  let R_value = 0;
  let C_value = 0;
  let J_value = 0;
  let A_value = 0;

  for (let i = 0; i < choices.length; i++) {
    const firstInitial = survey[i][0];
    if (!temp.hasOwnProperty(firstInitial)) {
      temp[firstInitial] = 0;
    }
    temp[firstInitial] += choices[i] - 4;
  }

  Object.entries(temp).forEach(([key, value]) => {
    // 지표끼리 비교해서 높은 값 찾기
    if (key === "R") {
      R_value += value;
    } else if (key === "T") {
      R_value -= value;
    } else if (key === "C") {
      C_value += value;
    } else if (key === "F") {
      C_value -= value;
    } else if (key === "J") {
      J_value += value;
    } else if (key === "M") {
      J_value -= value;
    } else if (key === "A") {
      A_value += value;
    } else if (key === "N") {
      A_value -= value;
    }
  });

  if (R_value <= 0) {
    result += "R";
  } else {
    result += "T";
  }

  if (C_value <= 0) {
    result += "C";
  } else {
    result += "F";
  }
  if (J_value <= 0) {
    result += "J";
  } else {
    result += "M";
  }
  if (A_value <= 0) {
    result += "A";
  } else {
    result += "N";
  }

  return result;
}

const _survey = ["AN", "CF", "MJ", "RT", "NA"];
const _coices = [5, 3, 2, 7, 5];

solution(_survey, _coices);
