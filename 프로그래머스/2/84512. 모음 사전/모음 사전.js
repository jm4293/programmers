function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const wordList = [];

  function generateWords(current) {
    if (current.length > 5) return;
    if (current.length > 0) wordList.push(current);
    for (const vowel of vowels) {
      generateWords(current + vowel);
    }
  }

  generateWords("");
  wordList.sort();
  return wordList.indexOf(word) + 1;
}