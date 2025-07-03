function solution(dartResult) {
    let bonus = {
        S: 1,
        D: 2,
        T: 3
    };

    let zeroTen = 0;
    let str = dartResult;
    let result = 0;
    let prevNumber = 0;
    let currentNumber = 0;
    for (let i = 0; i < str.length; i++) {
        const value = str[i];
        if (!isNaN(value) && value !== '0') {
            currentNumber = Number(value);
            zeroTen = Number(value);
            continue;
        }

        if (!isNaN(value) && value === '0') {
            zeroTen === 1 ? currentNumber = 10 : currentNumber = 0;
            zeroTen = 0;
            continue;
        }

        if (bonus.hasOwnProperty(value)) {
            currentNumber = currentNumber ** bonus[value];

            if (i + 1 <= str.length && str[i + 1] === '*') {
                currentNumber = currentNumber * 2;

                result += currentNumber;
                result += prevNumber;

                prevNumber = currentNumber;
                continue;
            }

            if (i + 1 <= str.length && str[i + 1] === '#') {
                currentNumber = currentNumber * -1;

                result += currentNumber;
                prevNumber = currentNumber;
                continue;
            }

            result += currentNumber;
            prevNumber = currentNumber;
        }


    }
    return result;
}

console.log("🚀 ~ solutio", solution("1S*2T*3S"))
