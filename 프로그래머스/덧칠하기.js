function solution(n, m, section) {

    //     section 반복문 돌려서 나온 값에 + m 안에 section[i + 1] section[i + 2] ... 값이 포함되는지 체크
    let res = 0;
    let 칠한범위 = [];
    for (let i = 0; i < section.length; i++) {
        const value = section[i];
        if (칠한범위.indexOf(value) === -1) {
            let 칠한거 = Array.from({ length: m }, (_, i) => value + i);
            칠한범위.push(...칠한거);
            res++;
        }
    }

    return res;
}