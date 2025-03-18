const temp = `3
this is a test
foobar
all your base`;

function test(str) {
  const linesData = str.trim().split("\n");
  const length = Number(linesData[0]);
  let result = [];
  for (let i = 0; i < length; i++) {
    const linesStr = linesData[i + 1].trim().split(" ");
    const data = `Case #${i + 1}: ${linesStr.reverse().join(" ")}`;
    result.push(data);
  }
  const result2 = result.join("\n");
  return result2;
}

console.log(test(temp));
