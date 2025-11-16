function solution(sizes) {
  const { maxW, maxH } = sizes.reduce((acc, [w, h]) => {
    const big = Math.max(w, h);
    const small = Math.min(w, h);
    return {
      maxW: Math.max(acc.maxW, big),
      maxH: Math.max(acc.maxH, small),
    };
  }, { maxW: 0, maxH: 0 });

  return maxW * maxH;
}