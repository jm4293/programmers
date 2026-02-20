function solution(t, p) {
  const len = p.length;
  const target = BigInt(p);
  let count = 0;

  for (let i = 0; i <= t.length - len; i++) {
    if (BigInt(t.slice(i, i + len)) <= target) {
      count++;
    }
  }

  return count;
}
