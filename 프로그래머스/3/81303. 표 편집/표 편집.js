function solution(n, k, cmd) {
  const linkedList = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i + 1,
  }));
  linkedList[0].prev = null;
  linkedList[n - 1].next = null;

  const removed = [];
  let current = k;

  for (const command of cmd) {
    const [op, x] = command.split(" ");
    if (op === "U") {
      for (let i = 0; i < +x; i++) {
        current = linkedList[current].prev;
      }
    } else if (op === "D") {
      for (let i = 0; i < +x; i++) {
        current = linkedList[current].next;
      }
    } else if (op === "C") {
      const { prev, next } = linkedList[current];
      removed.push(current);

      if (prev !== null) linkedList[prev].next = next;
      if (next !== null) linkedList[next].prev = prev;

      current = next !== null ? next : prev;
    } else if (op === "Z") {
      const restored = removed.pop();
      const { prev, next } = linkedList[restored];

      if (prev !== null) linkedList[prev].next = restored;
      if (next !== null) linkedList[next].prev = restored;
    }
  }

  const result = Array(n).fill("O");
  for (const index of removed) {
    result[index] = "X";
  }

  return result.join("");
}