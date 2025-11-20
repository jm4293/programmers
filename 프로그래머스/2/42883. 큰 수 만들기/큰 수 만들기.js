function solution(number, k) {
  const stack = [];
  let removeCount = k;

  for (const num of number) {
    while (removeCount > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      removeCount--;
    }
    stack.push(num);
  }

  while (removeCount > 0) {
    stack.pop();
    removeCount--;
  }

  return stack.join('');
}