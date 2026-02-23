function solution(n) {
  const count = n.toString(2).split("1").length;

  let next = n + 1;
  while (next.toString(2).split("1").length !== count) {
    next++;
  }

  return next;
}