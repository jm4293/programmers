function solution(people, limit) {
  // 1. 정렬 먼저!
  people.sort((a, b) => a - b);
  
  let answer = 0;

  while (people.length > 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift();
      people.pop();
    } else {
      people.pop();
    }
    answer++;
  }

  return answer;
}