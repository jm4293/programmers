function solution(land, height) {
  const n = land.length;
  const parent = Array.from({ length: n * n }, (_, i) => i);
  const edges = [];

  const getIndex = (x, y) => x * n + y;

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      parent[rootB] = rootA;
    }
  };

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          const cost = Math.abs(land[x][y] - land[nx][ny]);
          if (cost > height) {
            edges.push([getIndex(x, y), getIndex(nx, ny), cost]);
          } else {
            union(getIndex(x, y), getIndex(nx, ny));
          }
        }
      }
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;
  for (const [a, b, cost] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      totalCost += cost;
    }
  }

  return totalCost;
}