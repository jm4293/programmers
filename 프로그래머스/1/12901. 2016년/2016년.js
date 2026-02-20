function solution(a, b) {
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  let total = b - 1;
  for (let i = 0; i < a - 1; i++) {
    total += days[i];
  }

  return week[total % 7];
}
