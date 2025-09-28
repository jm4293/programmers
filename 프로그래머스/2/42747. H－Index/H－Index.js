function solution(citations) {
  citations.sort((a, b) => b - a);

  let hIndex = 0;

  citations.forEach((citation, index) => {
    if (citation >= index + 1) {
      hIndex = index + 1;
    }
  });

  return hIndex;
}