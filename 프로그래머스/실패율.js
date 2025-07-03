function solution(N, stages) {
    //    실패율 = (스테이지에 도달했으나) 클리어 못한 수 / 플레이어 수
    // 전체 스테이지 수 N, 
    //     stage 를 filter로 각 state 를 / 전체 length로 나누면 되나?
    //     근데 statges 길이가 길어서 filter 걸면 효율성에서 탈락할 느낌
    let playerNumber = stages.length;
    let failures = [];
    for (let i = 1; i <= N; i++) {
        const failure = stages.filter(v => v === i).length;
        failures.push(failure / playerNumber);
        playerNumber -= failure;
    }

    const newFailuers = failures.map((v, i) => {
        return { val: v, originIndex: i + 1 }
    });
    newFailuers.sort((a, b) => b.val - a.val);
    const result = newFailuers.map(v => v.originIndex);
    return result;
}