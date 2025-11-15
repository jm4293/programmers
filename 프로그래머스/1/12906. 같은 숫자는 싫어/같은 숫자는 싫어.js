function solution(arr) {
  const result = [];

  return arr.reduce((acc, cur, idx, arr) => {
    if (idx === 0 || cur !== arr[idx - 1]) {
      acc.push(cur);
    }

    return acc;
  }, []);
}