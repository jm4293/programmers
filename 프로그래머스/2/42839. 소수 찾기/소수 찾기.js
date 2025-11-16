function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function permutations(arr, k) {
  const res = [];
  const used = Array(arr.length).fill(false);
  const path = [];

  function dfs() {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) {
        continue;
      }

      used[i] = true;
      path.push(arr[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  }

  dfs();

  return res;
}

function solution(numbers) {
  const digits = numbers.split('');
  const made = new Set();

  for (let k = 1; k <= digits.length; k++) {
    for (const p of permutations(digits, k)) {
      const num = Number(p.join(''));
      made.add(num);
    }
  }

  let count = 0;
  made.forEach((num) => {
    if (isPrime(num)) {
      count++;
    }
  });

  return count;
}