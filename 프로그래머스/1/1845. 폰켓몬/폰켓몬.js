function solution(nums) {
    const numSet = new Set(nums);
    const maxTypes = nums.length / 2;
    return Math.min(numSet.size, maxTypes);
}