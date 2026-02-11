const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [total, count, ...rest] = inputData;

const calculate = rest.reduce((acc, cur) => {
  const [a, b] = cur.split(" ").map(Number);
  return acc + a * b;
}, 0);

console.log(calculate === Number(total) ? "Yes" : "No");
