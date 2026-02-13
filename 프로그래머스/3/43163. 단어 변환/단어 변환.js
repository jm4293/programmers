function solution(begin, target, words) {
  let answer = 0;
  const visited = new Array(words.length).fill(false);
  let found = false;

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

  function dfs(currentWord, depth) {
    if (currentWord === target) {
      answer = depth;
      found = true;
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isOneLetterDiff(currentWord, words[i])) {
        visited[i] = true;
        dfs(words[i], depth + 1);
        visited[i] = false;
      }
    }
  }

  dfs(begin, 0);
  return found ? answer : 0;
}