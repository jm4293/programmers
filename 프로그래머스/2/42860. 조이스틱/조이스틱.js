function solution(name) {
  const n = name.length;

  let verticalMove = 0;
  for (let i = 0; i < n; i++) {
    const alphabetIndex = name.charCodeAt(i) - 65;
    verticalMove += Math.min(alphabetIndex, 26 - alphabetIndex);
  }

  let horizontalMove = n - 1;
  for (let i = 0; i < n; i++) {
    let next = i + 1;
    while (next < n && name[next] === "A") {
      next++;
    }

    const optionA = i * 2 + (n - next);
    const optionB = (n - next) * 2 + i;

    horizontalMove = Math.min(horizontalMove, optionA, optionB);
  }

  return verticalMove + horizontalMove;
}