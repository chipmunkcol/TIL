function solution(food) {
  //
  let 왼쪽 = "";
  for (let i = 1; i < food.length; i++) {
    const foodNum = food[i];
    if (foodNum > 1) {
      const count = Math.floor(foodNum / 2);
      왼쪽 += String(i).repeat(count);
    }
  }
  const 오른쪽 = 왼쪽.split("").reverse().join("");

  return 왼쪽 + "0" + 오른쪽;
}
