function solution(nums) {
  const numsSet = new Set(nums);
  return Math.min(numsSet.size, nums.length / 2);
}