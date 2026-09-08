/*
Problem : Given a sorted array of integers nums and an integer target, return true if two different numbers add up to target. Otherwise, return false.

Do not use a nested loop or a set.
*/

function hasPairWithSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let sum = 0;
  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (sum == target) {
      return true;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 2, 4, 6, 10], 8));
console.log(hasPairWithSum([1, 3, 5, 7], 6));
console.log(hasPairWithSum([1, 2, 3, 4], 10));
console.log(hasPairWithSum([], 5));
