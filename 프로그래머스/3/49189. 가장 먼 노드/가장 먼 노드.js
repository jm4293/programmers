function solution(n, vertex) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  const distance = Array(n + 1).fill(0);

  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const queue = [1];
  visited[1] = true;
  let front = 0;

  while (front < queue.length) {
    const current = queue[front++];

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        distance[neighbor] = distance[current] + 1;
        queue.push(neighbor);
      }
    }
  }

  const maxDistance = Math.max(...distance);
  return distance.filter((d) => d === maxDistance).length;
}