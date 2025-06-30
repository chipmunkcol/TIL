
function solution(k, m, score) {
    const newScore = [...score].sort((a,b) => b-a);
    // 상자에서 가장 작은 값만 filter [3,3,2,1] 이라면 4번째 index
    const 상자중작은값 = newScore.filter((_, i) => (i+1)%m === 0);
    console.log(상자중작은값);
    
    return 상자중작은값.reduce((acc, val) => acc + val * m, 0);
}

// splice 는 O(n) 복잡도를 가짐
// 반복문 안에서 splice 쓰니까 O(n^2)
// 매번 Math.min 최솟값 찾는 것도 비효율적적 

// function solution(k, m, score) {
//     //     정렬해서 m 으로 나눠 상자를 만든다
//     //     계산은 각 상자의 가장 작은값 * m
//     //     k 는 한도인가? 일단 제외하고 계산해보자
//         const newScore = [...score].sort((a,b) => b-a);
//         const 상자갯수 = Math.floor(newScore.length / m);

//         let count = 0;
//         for (let i=0; i<상자갯수; i++) {
//             const 사과박스 = newScore.splice(0, m);
//             count += Math.min(...사과박스) * m;
//         }
        
//         return count;
//     }

