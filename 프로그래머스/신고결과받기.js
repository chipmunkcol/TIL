/**
 * 체크사항
 * 1. 동일유저가 동일유저 신고한 건은 1건으로 처리
 * @param {string[]} _id_list
 * @param {string[]} _report
 * @param {number} k
 */
function solution(_id_list, _report, k) {
  let result = [];

  const users = [..._id_list];
  const reports = [..._report];

  let 메모장 = {};
  let 신고당한사람메모장 = {};

  reports.forEach((report) => {
    const [신고자, 신고당한자] = report.split(" ");

    if (!신고당한사람메모장.hasOwnProperty(신고당한자)) {
      신고당한사람메모장[신고당한자] = 0;
    }

    // 동일유저 동일인 신고 제외
    if (!메모장[신고자]?.has(신고당한자)) {
      신고당한사람메모장[신고당한자] += 1;
    }

    if (!메모장.hasOwnProperty(신고자)) {
      const set = new Set();
      메모장[신고자] = set;
    }
    메모장[신고자].add(신고당한자);
  });

  let 정지당한사람 = [];
  Object.entries(신고당한사람메모장).forEach(([user, reportedNum]) => {
    if (reportedNum >= k) {
      정지당한사람.push(user);
    }
  });

  let 신고결과메일받을유저 = [];
  정지당한사람.forEach((정지user) => {
    Object.entries(메모장).forEach(([_신고자, _신고당한자]) => {
      if (_신고당한자.has(정지user)) {
        신고결과메일받을유저.push(_신고자);
      }
    });
  });

  users.forEach((user) => {
    const count = 신고결과메일받을유저.filter((v) => v === user).length;
    result.push(count);
  });

  return result;
}

const _id_list = ["con", "ryan"];
const _report = ["ryan con", "ryan con", "ryan con", "ryan con"];
solution(_id_list, _report, 3);
