/*
Problem : Given an integer array nums and an integer k, return the largest sum of any k consecutive elements.
 */

function maxSubarraySum(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];

    if (maxSum < windowSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSubarraySum([4, 2], 2)); // 6
console.log(maxSubarraySum([-4, -2, -7], 2)); // -6
console.log(maxSubarraySum([5], 1)); // 5

//Time Complexity : O(n)
//Space Complexity : O(1)

/*
I first calculate the sum of the first window. Then, I slide the window by subtracting the value that leaves and adding the new value that enters. I update the maximum sum after each move. The algorithm takes O(n) time and O(1) space.
*/
