function solution(n, m, section) {
  const wallArr = Array.from({ length: n }, (_, idx) => {
    return section.includes(idx + 1) ? 1 : 0;
  });

  let total = 0;

  for (let i = 0; i < n; i++) {
    if (wallArr[i] === 0) {
      continue;
    }

    total++;
    i += m - 1;
  }

  return total;
}