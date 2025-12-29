function solution(n, words) {
  let usedWords = new Set();
  let lastChar = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (usedWords.has(word) || (lastChar && word[0] !== lastChar)) {
      const person = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;

      return [person, turn];
    }

    usedWords.add(word);
    lastChar = word[word.length - 1];
  }

  return [0, 0];
}
