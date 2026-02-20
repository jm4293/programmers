function solution(today, terms, privacies) {
  const toDay = (str) => {
    const [y, m, d] = str.split(".").map(Number);
    return y * 12 * 28 + m * 28 + d;
  };

  const todayDay = toDay(today);

  const termMap = new Map();
  for (const term of terms) {
    const [type, month] = term.split(" ");
    termMap.set(type, Number(month) * 28);
  }

  const result = [];
  privacies.forEach((p, i) => {
    const [date, type] = p.split(" ");
    const expireDay = toDay(date) + termMap.get(type);

    if (expireDay <= todayDay) {
      result.push(i + 1);
    }
  });

  return result;
}