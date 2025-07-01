function solution(score) {
    const 평균 = score.map(v => (v[0] + v[1]) / 2);
    const 정렬된배열 = [...평균].sort((a, b) => b - a);
    // console.log(정렬된배열);
    return 평균.map((v) => 정렬된배열.indexOf(v) + 1);
}


// 삽질을 멈추자!
// function solution(score) {
//     //     평균 구해서 index를 넣어놓고
//     //     sort해서 index 값 return 하면 될듯
//     //     공동은 어떻게 반영하지?
//     const averages = score.map((v, i) => {
//         return { value: (v[0] + v[1]) / 2, originIndex: i }
//     });
//     averages.sort((a, b) => b.value - a.value >= 0 ? 1 : -1);

//     let prev = { value: 0, index: 0 };
//     let res = [];
//     for (let i = 0; i < averages.length; i++) {
//         const value = averages[i].value;
//         const originIndex = averages[i].originIndex;
//         if (value === prev.value) {
//             res.push({ value, index: prev.index, originIndex })
//         } else {
//             res.push({ value, index: i + 1, originIndex })
//             prev = { value, index: i + 1 };
//         }
//     }

//     console.log(res);

//     res.sort((a, b) => a.originIndex - b.originIndex >= 0 ? 1 : -1);
//     return res.map(v => v.index)
// }

