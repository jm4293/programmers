function solution(nums) {
  const ret = nums.length / 2;

  const set = new Set(nums);

  return Math.min(ret, set.size);
}