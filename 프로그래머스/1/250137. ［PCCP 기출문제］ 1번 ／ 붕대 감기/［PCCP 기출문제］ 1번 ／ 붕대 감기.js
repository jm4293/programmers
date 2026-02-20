function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let hp = health;
  let combo = 0;
  let prevTime = 0;

  for (const [time, damage] of attacks) {
    const seconds = time - prevTime - 1;

    if (seconds > 0) {
      const cycles = Math.floor((combo + seconds) / t);
      const remain = (combo + seconds) % t;
      hp += seconds * x + cycles * y;
      hp = Math.min(hp, health);
      combo = remain;
    }

    hp -= damage;

    if (hp <= 0) {
      return -1;
    }

    combo = 0;
    prevTime = time;
  }

  return hp;
}