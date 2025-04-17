const NUMBER_ENG = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let result = "";

  let numbers = "";
  for (const letter of s) {
    // Number인 경우 결과값에 합친다
    if (!isNaN(Number(letter))) {
      result += letter;
    }

    if (isNaN(Number(letter))) {
      //하나씩 스펠링을 합쳐서 스펠링이 완성될때 결과값에 합친다
      numbers += letter;
      if (NUMBER_ENG.hasOwnProperty(numbers)) {
        result += String(NUMBER_ENG[numbers]);
        numbers = "";
      }
    }
  }
  return Number(result);
}

let input_s = "one4seveneight";
solution(input_s);
