function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 1; i <= total; i++) {
    if (total % i === 0) {
      const width = total / i;
      const height = i;

      if (yellow === (width - 2) * (height - 2)) {
        return [width, height];
      }
    }
  }

  return [];
}