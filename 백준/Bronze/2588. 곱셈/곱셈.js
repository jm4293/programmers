const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = inputData[0];
const B = inputData[1];

const one = A * B[2];
const two = A * B[1];
const three = A * B[0];

console.log(one);
console.log(two);
console.log(three);
console.log(one + two * 10 + three * 100);