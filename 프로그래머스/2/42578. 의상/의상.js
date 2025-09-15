function solution(clothes) {
  const map = new Map();

  for (const [name, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  let result = 1;
  for (const count of map.values()) {
    result *= count + 1;
  }

  return result - 1;
}