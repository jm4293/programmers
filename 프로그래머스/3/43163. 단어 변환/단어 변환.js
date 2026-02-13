function solution(begin, target, words) {
  function isOneLetterDiff(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diffCount++;
      }

      if (diffCount > 1) {
        return false;
      }
    }

    return diffCount === 1;
  }

  const visited = new Array(words.length).fill(false);
  const queue = [[begin, 0]];
  let index = 0;

  while (index < queue.length) {
    const [currentWord, depth] = queue[index++];

    if (currentWord === target) {
      return depth;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isOneLetterDiff(currentWord, words[i])) {
        visited[i] = true;
        queue.push([words[i], depth + 1]);
      }
    }
  }

  return 0;
}