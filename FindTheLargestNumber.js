/*
Problem : Given a non-empty array of integers called numbs, return the largest number in the array.
*/
function findLargest(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(findLargest([3, 7, 2, 9, 4]));
console.log(findLargest([-5, -2, -8]));
