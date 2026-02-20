function solution(n, m, section) {
  let count = 0;
  let end = 0;

  for (const s of section) {
    if (s > end) {
      count++;
      end = s + m - 1;
    }
  }

  return count;
}
