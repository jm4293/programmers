function solution(participant, completion) {
  const map = new Map();

  for (const i of participant) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (const i of completion) {
    map.set(i, map.get(i) - 1);

    if (map.get(i) === 0) {
      map.delete(i);
    }
  }

  return [...map.keys()][0];
}