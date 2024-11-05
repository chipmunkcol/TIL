let arg = `
4
las
god
psala
sal
`;

let arg2 = `
4
kisik
ptq
tttrp
tulipan
`;

function temp(_arg) {
  const 파일내용 = _arg.split("\n").filter((v) => v);
  const 단어수 = parseInt(파일내용[0]);
  const 단어들 = 파일내용.slice(1, 단어수 + 1);
  let 비밀번호;
  for (const 단어 of 단어들) {
    const 비밀번호check = 단어들.find(
      (v) => v.split("").reverse().join("") === 단어
    );
    if (비밀번호check) {
      비밀번호 = 비밀번호check;
    }
  }
  const 비밀번호배열 = 비밀번호.split("");
  const 비밀번호길이 = 비밀번호배열.length;
  const 가운데글자인덱스 = (비밀번호길이 - 1) / 2;
  return 비밀번호배열[가운데글자인덱스];
}

temp(arg2);
