const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();
const year = Number(inputData);

if (year % 4) {
  return console.log(0);
}

if (year % 100) {
  return console.log(1);
}

if (year % 400) {
  return console.log(0);
}

console.log(1);
