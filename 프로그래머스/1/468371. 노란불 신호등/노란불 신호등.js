function solution(signals) {
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  function lcmMultiple(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur));
  }

  function isYellow(time, signal) {
    const [G, Y, R] = signal;
    const cycle = G + Y + R;
    const position = (time - 1) % cycle;

    return position >= G && position < G + Y;
  }

  const cycles = signals.map(([G, Y, R]) => G + Y + R);

  const maxTime = lcmMultiple(cycles);

  for (let time = 1; time <= maxTime; time++) {
    const allYellow = signals.every((signal) => isYellow(time, signal));

    if (allYellow) {
      return time;
    }
  }

  return -1;
}