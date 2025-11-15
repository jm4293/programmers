function solution(s) {
  const stack = [];

  s.split('').forEach((char) => {
    if (char === '(') {
      stack.push(char);
    }

    if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  });

  return stack.length === 0;
}
