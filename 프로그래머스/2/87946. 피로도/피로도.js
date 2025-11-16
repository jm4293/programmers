function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let result = 0;

  function dfs(currentK, count) {
    if (count > result) {
      result = count;
    }

    for (let i = 0; i < dungeons.length; i++) {
      const [need, cost] = dungeons[i];

      if (visited[i]) {
        continue;
      }

      if (currentK < need) {
        continue;
      }

      visited[i] = true;
      dfs(currentK - cost, count + 1);
      visited[i] = false;
    }
  }

  dfs(k, 0);
  return result;
}