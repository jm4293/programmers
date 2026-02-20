function solution(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipSet = new Set(skip);
  const filteredAlphabet = alphabet
    .split("")
    .filter((char) => !skipSet.has(char));

  for (let char of s) {
    let currentIndex = filteredAlphabet.indexOf(char);
    let newIndex = (currentIndex + index) % filteredAlphabet.length;
    answer += filteredAlphabet[newIndex];
  }

  return answer;
}
