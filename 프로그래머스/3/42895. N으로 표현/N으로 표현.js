function solution(N, number) {
  if (N === number) return 1;

  // dp[i] = N을 i개 사용해서 만들 수 있는 숫자들의 집합
  const dp = Array.from({ length: 9 }, () => new Set());

  // N을 i개 연속으로 붙인 수 (5, 55, 555, ...)
  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));
  }

  // N을 i개 사용해서 만들 수 있는 모든 경우
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      // j개 사용한 수와 (i-j)개 사용한 수를 사칙연산
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          if (num2 !== 0) dp[i].add(Math.floor(num1 / num2));
        }
      }
    }

    // number를 찾으면 즉시 반환
    if (dp[i].has(number)) return i;
  }

  return -1;
}