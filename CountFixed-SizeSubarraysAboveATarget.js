/*
Problem : Given an integer array nums, an integer k, and an integer target, return the number of contiguous subarrays of length k whose sum is greater than or equal to target.
*/

function countSubarrays(nums, k, target) {
  let count = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }
  if (windowSum >= target) {
    count++;
  }
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    if (windowSum >= target) {
      count++;
    }
  }
  return count;
}

console.log(countSubarrays([2, 1, 5, 1, 3, 2], 3, 7)); // 3
console.log(countSubarrays([1, 1, 1, 1], 2, 3)); // 0
console.log(countSubarrays([4, -1, 2, 1], 2, 3)); // 2
console.log(countSubarrays([5], 1, 5)); // 1
