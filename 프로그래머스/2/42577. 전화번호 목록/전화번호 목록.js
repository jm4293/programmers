function solution(phone_book) {
  const set = new Set(phone_book);
  
  for (const phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.substring(0, i);
      if (set.has(prefix)) return false;
    }
  }
  
  return true;
}