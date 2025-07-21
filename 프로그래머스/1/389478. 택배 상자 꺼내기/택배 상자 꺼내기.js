function solution(n, w, num) {
  // num의 (row, col) 좌표 구하기
  const row = Math.floor((num - 1) / w);
  const idx = (num - 1) % w;
  const col = row % 2 === 0 ? idx : w - 1 - idx;

  let count = 0;

  // 전체 층 수
  const maxRow = Math.ceil(n / w);

  // row부터 위로 검사
  for (let r = row; r < maxRow; r++) {
    let boxNum;

    if (r % 2 === 0) {
      boxNum = r * w + col + 1;
    } else {
      boxNum = r * w + (w - 1 - col) + 1;
    }
    if (boxNum > n) break;
    count++;
  }
  return count;
}