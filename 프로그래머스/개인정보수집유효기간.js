function solution(_today, terms, privacies) {
  let result = [];

  const today = new Date(_today);
  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    // 약관 시작일
    const _startDate = privacy.split(" ")[0];

    // 약관종류
    const rank = privacy.split(" ")[1];

    // 약관 유효기간 (단위: month)
    const term = terms.find((v) => v.split(" ")[0] === rank).split(" ")[1];

    // 기간 지났는지 check
    const startDate = new Date(_startDate);
    const endDate = new Date(_startDate);
    endDate.setMonth(startDate.getMonth() + Number(term));

    const isExpiration = today < endDate;
    if (!isExpiration) {
      result.push(i + 1);
    }
  }

  //문자열 배열

  return result;
}

let 투데이 = "2022.05.19";
let 기간들 = ["A 6", "B 12", "C 3"];
let 약관들 = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];

solution(투데이, 기간들, 약관들);
