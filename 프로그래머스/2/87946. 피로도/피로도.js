function solution(k, dungeons) {
  let maxCount = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(currentK, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && currentK >= dungeons[i][0]) {
        visited[i] = true;
        dfs(currentK - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return maxCount;
}
