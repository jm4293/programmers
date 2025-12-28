function solution(want, number, discount) {
  let answer = 0;

  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const windowMap = new Map();
    for (let j = i; j < i + 10; j++) {
      windowMap.set(discount[j], (windowMap.get(discount[j]) || 0) + 1);
    }

    let isValid = true;
    for (const [item, count] of wantMap) {
      if (windowMap.get(item) !== count) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer++;
    }
  }

  return answer;
}
