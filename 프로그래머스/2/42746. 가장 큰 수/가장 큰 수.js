function solution(numbers) {
  const stringNumbers = numbers.map(String);

  stringNumbers.sort((a, b) => b + a - (a + b));

  const answer = stringNumbers.join('');

  return answer[0] === '0' ? '0' : answer;
}
