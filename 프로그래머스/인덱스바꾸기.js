function solution(my_string, num1, num2) {
  let result = [...my_string];

  // result.splice(num1, 1, my_string[num2]);
  // result.splice(num2, 1, my_string[num1]);

  // return result.join("");
  result[num1] = my_string[num2];
  result[num2] = my_string[num1];

  return result.join("");
}

solution("hello", 1, 2);
