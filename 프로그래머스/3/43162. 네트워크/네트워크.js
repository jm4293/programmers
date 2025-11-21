function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let networkCount = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      networkCount++;

      const queue = [i];
      visited[i] = true;

      while (queue.length > 0) {
        const current = queue.shift();

        for (let j = 0; j < n; j++) {
          if (computers[current][j] === 1 && !visited[j]) {
            visited[j] = true;
            queue.push(j);
          }
        }
      }
    }
  }

  return networkCount;
}