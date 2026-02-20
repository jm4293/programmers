function solution(players, callings) {
  const rank = new Map();
  const name = new Map();

  players.forEach((p, i) => {
    rank.set(p, i);
    name.set(i, p);
  });

  for (const caller of callings) {
    const r = rank.get(caller);
    const front = name.get(r - 1);

    rank.set(caller, r - 1);
    rank.set(front, r);
    name.set(r - 1, caller);
    name.set(r, front);
  }

  return Array.from({ length: players.length }, (_, i) => name.get(i));
}