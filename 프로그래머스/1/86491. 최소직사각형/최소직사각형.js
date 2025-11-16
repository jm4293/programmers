function solution(sizes) {
  const sorted = sizes.map((size) => {
    const [w, h] = size;

    if (w < h) {
      return [h, w];
    }

    return [w, h];
  });

  const maxWidth = Math.max(...sorted.map((size) => size[0]));
  const maxHeight = Math.max(...sorted.map((size) => size[1]));

  return maxWidth * maxHeight;
}