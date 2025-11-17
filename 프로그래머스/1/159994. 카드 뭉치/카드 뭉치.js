function solution(cards1, cards2, goal) {
  let result = 'Yes';

  for (cur of goal) {
    if (cur === cards1[0]) {
      cards1.shift();
    } else if (cur === cards2[0]) {
      cards2.shift();
    } else {
      result = 'No';
      break;
    }
  }

  return result;
}