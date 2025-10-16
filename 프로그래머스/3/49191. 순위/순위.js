function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const reverseGraph = Array.from({ length: n + 1 }, () => []);

  for (const [winner, loser] of results) {
    graph[winner].push(loser);
    reverseGraph[loser].push(winner);
  }

  const canCompare = Array.from({ length: n + 1 }, () => new Set());

  function dfs(start, current, graph, visited) {
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        canCompare[start].add(neighbor);
        dfs(start, neighbor, graph, visited);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    dfs(i, i, graph, new Set());
    dfs(i, i, reverseGraph, new Set());
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (canCompare[i].size === n - 1) {
      answer++;
    }
  }

  return answer;
}