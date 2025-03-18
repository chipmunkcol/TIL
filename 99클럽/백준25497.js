// const filePath = process.platform === "linux" ? 0 : "./input.txt";
// let [N, ...arr] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");
let temp = `
4
SSKK
`;

const numberTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const linkTypes = ["L", "R", "S", "K"];

function main(arg) {
  const dummy = arg.trim().split("\n");
  const skillLength = Number(dummy[0]);
  const skills = dummy[1].split("");
  let count = 0;
  let link_L = [];
  let link_R = [];
  let link_S = [];
  let link_K = [];
  skills.forEach((skill, i) => {
    if (skill === "L") {
      link_L.push(i);
    }
    if (skill === "R") {
      link_R.push(i);
    }
    if (skill === "S") {
      link_S.push(i);
    }
    if (skill === "K") {
      link_K.push(i);
    }
  });

  for (let i = 0; i < skillLength; i++) {
    const skill = skills[i];

    if (skill === numberTypes.find((v) => v === skill)) {
      count++;
    }
    if (skill === "L" && link_R.length > 0) {
      // R 배열에 있는 index 값이 L보다 크고 S 와 K보다 작아야함
      const L보다큰R인덱스 = link_R.find((v) => v > i);
      if (
        L보다큰R인덱스 !== undefined &&
        link_S.length === 0 &&
        link_K.length === 0
      ) {
        count++;
      } else if (link_S.length > 0 && link_K.length === 0) {
        if (link_S.find((v) => v > L보다큰R인덱스)) {
          count++;
        }
      } else if (link_S.length === 0 && link_K.length > 0) {
        if (link_K.find((v) => v > L보다큰R인덱스)) {
          count++;
        }
      } else if (link_S.length > 0 && link_K.length > 0) {
        if (
          link_S.find((v) => v > L보다큰R인덱스) &&
          link_K.find((v) => v > L보다큰R인덱스)
        ) {
          count++;
        }
      }
    }
    if (skill === "S" && link_K.length > 0) {
      // K 배열에 있는 index 값이 S보다 크고 L 와 R 보다 작아야함
      const S보다큰K인덱스 = link_K.find((v) => v > i);
      if (
        S보다큰K인덱스 !== undefined &&
        link_L.length === 0 &&
        link_R.length === 0
      ) {
        count++;
      } else if (link_L.length > 0 && link_R.length === 0) {
        if (link_L.find((v) => v > S보다큰K인덱스)) {
          count++;
        }
      } else if (link_L.length === 0 && link_R.length > 0) {
        if (link_R.find((v) => v > S보다큰K인덱스)) {
          count++;
        }
      } else if (link_L.length > 0 && link_R.length > 0) {
        if (
          link_L.find((v) => v > S보다큰K인덱스) &&
          link_R.find((v) => v > S보다큰K인덱스)
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(main(temp));
