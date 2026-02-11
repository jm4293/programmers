function solution(brown, yellow) {
  const total = brown + yellow;

  for (let width = 3; width <= total; width++) {
    if (total % width === 0) {
      const height = total / width;
      if (width >= height && (width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}