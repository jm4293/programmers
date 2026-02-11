function solution(k, dungeons) {
  let maxCount = 0;

  function dfs(remainingFatigue, visited, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && remainingFatigue >= dungeons[i][0]) {
        visited[i] = true;
        dfs(remainingFatigue - dungeons[i][1], visited, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, Array(dungeons.length).fill(false), 0);
  return maxCount;
}