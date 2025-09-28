function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    const [i, j, k] = command;
    const sliced = array.slice(i - 1, j);
    const sorted = sliced.sort((a, b) => a - b);
    answer.push(sorted[k - 1]);
  });

  return answer;
}