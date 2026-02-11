const inputData = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [a, b, c] = inputData.map(Number);

console.log(a+b+c);