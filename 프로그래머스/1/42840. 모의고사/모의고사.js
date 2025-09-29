function solution(answers) {
  const supoja = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const score = [0, 0, 0];

  answers.forEach((answer, i) => {
    supoja.forEach((pattern, j) => {
      if (answer === pattern[i % pattern.length]) {
        score[j]++;
      }
    });
  });

  const maxScore = Math.max(...score);
  const answer = [];

  score.forEach((s, i) => {
    if (s === maxScore) {
      answer.push(i + 1);
    }
  });

  return answer;
}
