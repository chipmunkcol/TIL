function solution(strings, n) {
  const newStrings = strings.map((v, i) => {
    return { value: v[n], originalValue: v, index: i };
  });

  newStrings.sort((a, b) => {
    if (a.value === b.value) {
      return a.originalValue > b.originalValue ? 1 : -1;
    }
    return a.value > b.value ? 1 : -1;
  });

  return newStrings.map((v) => v.originalValue);
}
