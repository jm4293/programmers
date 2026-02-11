const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);
const [H, M] = inputData;

if (M < 45) {
  if (H === 0) {
    console.log(23, 60 - 45 + M);
  } else {
    console.log(H - 1, 60 - 45 + M);
  }
} else {
  console.log(H, M - 45);
}
