function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let maxDay = days[0];

  return days.reduce(
    (acc, day, index, arr) => {
      if (index === 0) {
        return acc;
      }

      if (day <= maxDay) {
        acc[acc.length - 1]++;
      } else {
        maxDay = day;
        acc.push(1);
      }

      return acc;
    },
    [1],
  );
}