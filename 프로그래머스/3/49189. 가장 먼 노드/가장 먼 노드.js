function solution(n, edge) {
  const graph = new Map();

  edge.forEach(([a, b]) => {
    if (!graph.has(a)) {
      graph.set(a, []);
    }
    if (!graph.has(b)) {
      graph.set(b, []);
    }

    graph.get(a).push(b);
    graph.get(b).push(a);
  });

  const visited = new Array(n + 1).fill(false);
  const distance = new Array(n + 1).fill(0);
  let maxDistance = 0;
  const queue = [1];
  visited[1] = true;
  distance[1] = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    graph.get(current).forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        distance[neighbor] = distance[current] + 1;
        queue.push(neighbor);
      }
      maxDistance = Math.max(maxDistance, distance[neighbor]);
    });
  }

  return distance.filter((dist) => dist === maxDistance).length;
}