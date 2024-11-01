function solution(_name, _yearning, _photo) {
  let result = [];
  let photo = [..._photo];

  for (const photos of photo) {
    let sum = 0;
    photos.forEach(name => {
      const index = _name.findIndex(n => n === name);

      if (index !== -1) {
        sum += _yearning[index];
      }
    });
    result.push(sum);
  }
  return result;
}