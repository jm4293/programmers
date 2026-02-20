function solution(s) {
  const map = new Map();
  const result = [];

  s.split("").forEach((c, i) => {
    result.push(map.has(c) ? i - map.get(c) : -1);
    map.set(c, i);
  });

  return result;
}