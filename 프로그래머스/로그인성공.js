function solution(id_pw, db) {
    // db 를 Map 으로 만들어서 비교하면 O(1) 복잡도로 가능할지도?
    const dbMap = new Map(db);
    const id = id_pw[0];
    const pw = id_pw[1];
    if (!dbMap.has(id)) return "fail"
    return dbMap.get(id) === pw ? "login" : "wrong pw"
}
