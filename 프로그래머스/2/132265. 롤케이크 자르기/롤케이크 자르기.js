function solution(topping) {
  let answer = 0;

  const leftSet = new Set();
  const rightMap = new Map();

  for (const t of topping) {
    rightMap.set(t, (rightMap.get(t) || 0) + 1);
  }

  for (let i = 0; i < topping.length - 1; i++) {
    const current = topping[i];

    leftSet.add(current);

    rightMap.set(current, rightMap.get(current) - 1);

    if (rightMap.get(current) === 0) {
      rightMap.delete(current);
    }

    if (leftSet.size === rightMap.size) {
      answer++;
    }
  }

  return answer;
}