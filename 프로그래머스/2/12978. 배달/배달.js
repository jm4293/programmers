function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const pq = [[0, 1]]; 

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDistance, currentNode] = pq.shift();

    if (currentDistance > distances[currentNode]) continue;

    for (const [neighbor, weight] of graph[currentNode]) {
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.push([distance, neighbor]);
      }
    }
  }

  return distances.filter((distance) => distance <= K).length;
}
