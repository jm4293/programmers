function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  function dfs(node, visited) {
    visited[node] = true;
    let count = 1;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        count += dfs(neighbor, visited);
      }
    }

    return count;
  }

  let minDiff = Infinity;

  for (const [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false);
    visited[v1] = true;
    visited[v2] = true;

    const count = dfs(v1, visited);

    const diff = Math.abs(n - 2 * count);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
