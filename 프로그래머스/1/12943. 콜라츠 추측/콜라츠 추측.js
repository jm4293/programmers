function solution(num) {
  if (num === 1) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    count++;
  }

  return -1;
}