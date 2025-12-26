function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  const result = [];
  let maxDay = 0;

  days.forEach((day) => {
    if (day > maxDay) {
      result.push(1);
      maxDay = day;
    } else {
      result[result.length - 1]++;
    }
  });

  return result;
}