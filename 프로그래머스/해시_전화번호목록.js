function solution(phone_book) {
  const newBook = [...phone_book];
  newBook.sort();

  for (let i in newBook) {
    //         중복 제거
    const bookWithoutDup = newBook.filter((v) => v !== newBook[i]);

    const check = bookWithoutDup.some((v) => v.startsWith(newBook[i]));
    if (check) {
      return false;
    }
  }

  return true;
}
solution(["119", "97674223", "1195524421"]);
