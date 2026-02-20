function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let hp = health;
  let combo = 0;
  let prevTime = 0;

  for (const [time, damage] of attacks) {
    const seconds = time - prevTime - 1;

    if (seconds > 0) {
      const cycles = Math.floor(seconds / t);
      const remain = seconds % t;
      hp += seconds * x + cycles * y;
      hp = Math.min(hp, health);
    }

    hp -= damage;

    if (hp <= 0) {
      return -1;
    }

    prevTime = time;
  }

  return hp;
}