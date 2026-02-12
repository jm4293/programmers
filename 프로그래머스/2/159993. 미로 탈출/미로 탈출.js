function solution(maps) {
  const numRows = maps.length;
  const numCols = maps[0].length;

  let start, lever, exit;

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (maps[r][c] === "S") {
        start = [r, c];
      } else if (maps[r][c] === "L") {
        lever = [r, c];
      } else if (maps[r][c] === "E") {
        exit = [r, c];
      }
    }
  }

  const bfs = (start, end) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const queue = [[...start, 0]];
    const visited = Array.from({ length: numRows }, () =>
      Array(numCols).fill(false),
    );
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      const [r, c, dist] = queue.shift();

      if (r === end[0] && c === end[1]) {
        return dist;
      }

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < numRows &&
          nc >= 0 &&
          nc < numCols &&
          !visited[nr][nc] &&
          maps[nr][nc] !== "X"
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc, dist + 1]);
        }
      }
    }

    return -1;
  };

  const toLever = bfs(start, lever);
  if (toLever === -1) {
    return -1;
  }

  const toExit = bfs(lever, exit);
  if (toExit === -1) {
    return -1;
  }

  return toLever + toExit;
}