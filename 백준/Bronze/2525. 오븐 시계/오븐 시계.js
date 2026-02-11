const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let [H, M] = inputData[0].split(" ").map(Number);
const time = +inputData[1];

M += time;
H += Math.floor(M / 60);
M = M % 60;
H = H % 24;

console.log(H, M);