function solution(s) {
  let answer = [];
  s = s.slice(2, s.length - 2).split('},{');
  s.sort((a, b) => a.length - b.length);

  const set = new Set();

  for (let str of s) {
    const nums = str.split(',');
    for (let num of nums) {
      if (!set.has(num)) {
        set.add(num);
        answer.push(Number(num));
      }
    }
  }

  return answer;
}