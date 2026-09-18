/*
Problem : Given an array of positive integers nums and a positive integer target, return the maximum length of a contiguous subarray whose sum is less than or equal to target.

All numbers in nums are positive.

Do not use nested loops.
*/

function longestSubarray(nums, target) {
  let left = 0;
  let right = 0;
  let window = 0;
  let maxLength = 0;

  while (right < nums.length) {
    window = window + nums[right];

    while (window > target) {
      window = window - nums[left];
      left++;
    }

    let length = right - left + 1;

    if (length > maxLength) {
      maxLength = length;
    }

    right++;
  }

  return maxLength;
}

console.log(longestSubarray([1, 2, 1, 1, 3], 5)); // 4
console.log(longestSubarray([2, 3, 1, 2], 4)); // 2
console.log(longestSubarray([5, 6, 7], 4)); // 0
console.log(longestSubarray([], 5)); // 0
