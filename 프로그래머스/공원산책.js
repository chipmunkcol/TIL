function solution(park, routes) {
  //     E-동 W-서 S-남 N-북
  //     W-가로길이 H-세로길이

  //     이중 배열을 만들고 시작해야되는가?
  const parkArea = park.map((v) => v.split(""));
  const parkAreaWidth = parkArea[0].length;
  const partAreaHeight = park.length;

  let startArea = [0, 0];

  for (let i = 0; i < parkArea.length; i++) {
    const targetIndex = parkArea[i].findIndex((v) => v === "S");
    if (targetIndex !== -1) {
      const 가로좌표 = targetIndex;
      const 세로좌표 = i;
      startArea = [가로좌표, 세로좌표];
      break;
    }
  }

  const temp = {
    E: [1, 0],
    W: [-1, 0],
    S: [0, 1],
    N: [0, -1],
  };

  routes.forEach((route) => {
    let isValid = true;
    const 방향 = route.split(" ")[0];
    const 거리 = route.split(" ")[1];

    const [x, y] = startArea;
    let x축이동 = 0;
    let y축이동 = 0;
    let x로움직인값 = x;
    let y로움직인값 = y;
    for (let i = 0; i < 거리; i++) {
      x로움직인값 = x로움직인값 + temp[방향][0];
      y로움직인값 = y로움직인값 + temp[방향][1];
      if (
        0 <= x로움직인값 &&
        x로움직인값 < parkAreaWidth &&
        0 <= y로움직인값 &&
        y로움직인값 < partAreaHeight &&
        parkArea[y로움직인값][x로움직인값] !== "X"
      ) {
        x축이동 += temp[방향][0];
        y축이동 += temp[방향][1];
      } else {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      startArea = [startArea[0] + x축이동, startArea[1] + y축이동];
    }
  });

  return [startArea[1], startArea[0]];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));

// console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
