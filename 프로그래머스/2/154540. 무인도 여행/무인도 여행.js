function solution(maps) {
  let rows = maps.length;
  let cols = maps[0].length;
  let visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );

  function bfs(x, y) {
    let queue = [[x, y]];
    let sum = 0;

    while (queue.length > 0) {
      let [cx, cy] = queue.shift();

      if (
        cx < 0 ||
        cx >= rows ||
        cy < 0 ||
        cy >= cols ||
        maps[cx][cy] === "X" ||
        visited[cx][cy]
      ) {
        continue;
      }

      visited[cx][cy] = true;
      sum += parseInt(maps[cx][cy], 10);

      // 상, 하, 좌, 우 탐색
      queue.push([cx - 1, cy]);
      queue.push([cx + 1, cy]);
      queue.push([cx, cy - 1]);
      queue.push([cx, cy + 1]);
    }

    return sum;
  }

  let results = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        let result = bfs(i, j);
        if (result > 0) {
          results.push(result);
        }
      }
    }
  }

  if (results.length === 0) {
    return [-1];
  }

  return results.sort((a, b) => a - b);
}