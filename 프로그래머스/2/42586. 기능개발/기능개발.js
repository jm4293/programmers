function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}