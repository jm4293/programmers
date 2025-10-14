function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  for (const student of lostSet) {
    if (reserveSet.has(student)) {
      lostSet.delete(student);
      reserveSet.delete(student);
    }
  }

  const lostArr = Array.from(lostSet).sort((a, b) => a - b);
  const reserveArr = Array.from(reserveSet).sort((a, b) => a - b);

  for (let i = 0; i < lostArr.length; i++) {
    const student = lostArr[i];

    if (reserveArr.includes(student - 1)) {
      reserveArr.splice(reserveArr.indexOf(student - 1), 1);
      lostArr.splice(i, 1);
      i--;
    } else if (reserveArr.includes(student + 1)) {
      reserveArr.splice(reserveArr.indexOf(student + 1), 1);
      lostArr.splice(i, 1);
      i--;
    }
  }

  return n - lostArr.length;
}