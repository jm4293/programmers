function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const distances = Array(n + 1).fill(Infinity);
  distances[1] = 0;

  const queue = [1];

  while (queue.length) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (distances[neighbor] === Infinity) {
        distances[neighbor] = distances[node] + 1;
        queue.push(neighbor);
      }
    }
  }

  const maxDistance = Math.max(...distances.filter((d) => d !== Infinity));
  return distances.filter((d) => d === maxDistance).length;
}