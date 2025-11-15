function solution(players, callings) {
  const playerMap = new Map(players.map((player, index) => [player, index]));

  callings.reduce((acc, cur) => {
    const currentIndex = playerMap.get(cur);

    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevPlayer = acc[prevIndex];

      // 위치 교환
      acc[prevIndex] = cur;
      acc[currentIndex] = prevPlayer;

      // Map 업데이트
      playerMap.set(cur, prevIndex);
      playerMap.set(prevPlayer, currentIndex);
    }

    return acc;
  }, players);

  return players;
}