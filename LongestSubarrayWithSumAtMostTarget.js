/*
Problem : Given an array of positive integers nums and a positive integer target, return the maximum length of a contiguous subarray whose sum is less than or equal to target.

All numbers in nums are positive.

Do not use nested loops.
*/

function longestSubarray(nums, target) {
  let left = 0;
  let right = 0;
  let window = nums[left];
  let maxLength = 0;

  while (right < nums.length) {
    let length;
    if (window <= target) {
      length = right - left + 1;
      if (length > maxLength) {
        maxLength = length;
      }
      right++;
      window = window + nums[right];
    } else if (window > target) {
      window = window - nums[left];
      left++;
    }
  }
  return maxLength;
}

console.log(longestSubarray([1, 2, 1, 1, 3], 5)); // 4
console.log(longestSubarray([2, 3, 1, 2], 4)); // 2
console.log(longestSubarray([5, 6, 7], 4)); // 0
console.log(longestSubarray([], 5)); // 0
