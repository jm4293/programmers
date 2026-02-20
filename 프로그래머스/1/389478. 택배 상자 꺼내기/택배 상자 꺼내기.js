function solution(n, w, num) {
  const row = Math.floor((num - 1) / w);
  const idx = (num - 1) % w;
  const col = row % 2 === 0 ? idx : w - 1 - idx;
  const height = Math.ceil(n / w);
  let answer = 0;

  for (let i = row + 1; i < height; i++) {
    const boxNum = i % 2 === 0 ? i * w + col + 1 : i * w + (w - 1 - col) + 1;

    if (boxNum <= n) {
      answer++;
    }
  }

  return answer + 1;
}