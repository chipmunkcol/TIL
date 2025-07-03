function solution(babbling) {
    const spell = ["aya", "ye", "woo", "ma"];

    for (word of babbling) {

        for (let i = 0; i < spell.length; i++) {

        }
    }
}

// function solution(babbling) {
//     const spell = ["aya", "ye", "woo", "ma"];

//     //     연속 발음 어떻게 잡지
//     let count = 0;
//     for (let i = 0; i < babbling.length; i++) {
//         const value = babbling[i];
//         let doBubble = value;
//         for (let j = 0; j < spell.length; j++) {
//             const partialBubble = doBubble.split(spell[j]);
//             if (partialBubble.length === 2) {
//                 if (partialBubble.join("") === "") {
//                     count++
//                     break;
//                 } else {
//                     doBubble = partialBubble.join("");
//                 }
//             }

//             if (partialBubble.length > 2) {
//                 const targetIndex = partialBubble.findIndex(v => v === '');
//                 if (partialBubble[targetIndex + 1] === "") {
//                     break;
//                 }
//                 doBubble = partialBubble.join("");
//             }
//         }
//         if (doBubble[0] === "") count++;
//     }

//     return count;
// }

// console.log("🚀 ~", solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
