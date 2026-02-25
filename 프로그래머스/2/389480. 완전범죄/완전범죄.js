function solution(info, n, m) {
  const INF = Infinity;
  let dp = Array(n).fill(INF);
  dp[0] = 0;

  for (const [a, b] of info) {
    const next = Array(n).fill(INF);
    for (let i = 0; i < n; i++) {
      if (dp[i] === INF) {
        continue;
      }

      if (i + a < n) {
        next[i + a] = Math.min(next[i + a], dp[i]);
      }

      if (dp[i] + b < m) {
        next[i] = Math.min(next[i], dp[i] + b);
      }
    }
    dp = next;
  }

  const result = dp.findIndex((v) => v !== INF);
  return result === -1 ? -1 : result;
}