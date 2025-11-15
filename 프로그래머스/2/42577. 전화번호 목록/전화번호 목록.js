function solution(phone_book) {
  // 정렬하면 접두어 관계가 있는 번호들이 인접하게 됨
  phone_book.sort();
  
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 다음 번호가 현재 번호로 시작하는지 확인
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  
  return true;
}