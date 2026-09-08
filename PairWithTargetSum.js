/*
Problem : Given a sorted array of integers nums and an integer target, return true if two different numbers add up to target. Otherwise, return false.

Do not use a nested loop or a set.
*/

function hasPairWithSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (sum === target) {
      return true;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 2, 4, 6, 10], 8)); // true
console.log(hasPairWithSum([1, 3, 5, 7], 6)); // true
console.log(hasPairWithSum([1, 2, 3, 4], 10)); // false
console.log(hasPairWithSum([], 5)); // false
console.log(hasPairWithSum([4], 8)); // false
console.log(hasPairWithSum([1, 2], 0)); // false
