// const filePath = process.platform === "linux" ? 0 : "./input.txt";
// let [N, ...arr] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

let temp = `
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front
`;

function main(temp) {
  const dummy = temp.trim().split("\n");
  const dummyLength = Number(dummy[0]);
  const str = dummy.splice(1, dummyLength);
  let queue = [];
  let result = [];
  for (let i = 0; i < dummyLength; i++) {
    const data = str[i];
    const json = data.trim().split(" ");
    const key = json[0];
    const value = json[1];
    const 큐길이 = queue.length;
    if (key === "push") {
      const n_value = Number(value);
      queue.push(n_value);
    } else if (key === "pop") {
      if (큐길이 === 0) {
        result.push(-1);
      } else {
        result.push(queue.shift()); // 큐의 첫 번째 요소를 제거하고 출력
      }
    } else if (key === "size") {
      result.push(큐길이);
    } else if (key === "empty") {
      result.push(큐길이 ? 0 : 1);
    } else if (key === "front") {
      result.push(큐길이 === 0 ? -1 : queue[0]);
    } else if (key === "back") {
      const 마지막값 = 큐길이 ? queue[큐길이 - 1] : undefined;
      result.push(마지막값 ? 마지막값 : -1);
    }
  }
  return result.join("\n");
}

console.log(main(temp));

// 1;
// 2;
// 2;
// 0;
// 1;
// 2
//- 1;
// 0;
// 1
//- 1;
// 0;
// 3;
