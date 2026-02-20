function solution(friends, gifts) {
  const idx = {};
  friends.forEach((name, i) => (idx[name] = i));
  const n = friends.length;

  const table = Array.from({ length: n }, () => Array(n).fill(0));
  for (const gift of gifts) {
    const [giver, receiver] = gift.split(" ");
    table[idx[giver]][idx[receiver]]++;
  }

  const score = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      score[i] += table[i][j] - table[j][i];
    }
  }

  const next = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (table[i][j] > table[j][i]) {
        next[i]++;
      } else if (table[i][j] < table[j][i]) {
        next[j]++;
      } else {
        if (score[i] > score[j]) next[i]++;
        else if (score[i] < score[j]) next[j]++;
      }
    }
  }

  return Math.max(...next);
}