function solution(keymap, targets) {
  const map = new Map();

  keymap.forEach((str) => {
    str.split("").forEach((char, index) => {
      if (map.has(char)) {
        const prev = map.get(char);
        map.set(char, Math.min(prev, index + 1));
      } else {
        map.set(char, index + 1);
      }
    });
  });

  const answer = targets.map((target) => {
    let count = 0;
    for (const char of target) {
      if (!map.has(char)) {
        return -1;
      }
      count += map.get(char);
    }
    return count;
  });

  return answer;
}