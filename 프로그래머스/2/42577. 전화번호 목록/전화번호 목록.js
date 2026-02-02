function solution(phone_book) {
  phone_book.sort();

  for (let [i, phone] of phone_book.entries()) {
    if (i < phone_book.length - 1 && phone_book[i + 1].startsWith(phone)) {
      return false;
    }
  }

  return true;
}