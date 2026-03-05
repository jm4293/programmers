function solution(N, stations, W) {
  let answer = 0;
  let position = 1;
  const coverage = 2 * W + 1;

  for (let i = 0; i < stations.length; i++) {
    const leftCoverage = stations[i] - W;

    if (position < leftCoverage) {
      const gap = leftCoverage - position;
      answer += Math.ceil(gap / coverage);
    }

    position = stations[i] + W + 1;
  }

  if (position <= N) {
    const gap = N - position + 1;
    answer += Math.ceil(gap / coverage);
  }

  return answer;
}