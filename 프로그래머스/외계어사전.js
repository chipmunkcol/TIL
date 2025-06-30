function solution(spell, dic) {
    //     사전(dic) 단어 중 하나라도 spell로 만들 수 있으면 return 1
    //     dic 반복 문 돌려서 각 알파벳이 모두 spell 에 속해있는지 체크
    const spellString = spell.sort().join("");
    return dic.some(v => [...v].sort().join("") === spellString) ? 1 : 2

}