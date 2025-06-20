function solution(s) {
  const s배열 = s.split(""); // ex. ["(", ")"]
  if (s배열[0] === ")") {
    return false;
  }

  if (s배열[s배열.length - 1] === "(") {
    return false;
  }

  let count = 0;
  for (val of s배열) {
    if (val === "(") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0 ? true : false;
}
