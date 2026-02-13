function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[0, 0, 1]];
  let front = 0;

  maps[0][0] = 2;

  while (front < queue.length) {
    const [row, col, distance] = queue[front++];

    if (row === n - 1 && col === m - 1) {
      return distance;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < m &&
        maps[newRow][newCol] === 1
      ) {
        maps[newRow][newCol] = 2;
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  return -1;
}