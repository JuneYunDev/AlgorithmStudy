/*
Problem : Given an integer array nums, return the first number that appears for the second time while reading the array from left to right.
*/

function firstRepeatedNumber(nums) {
  let check = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (check.has(nums[i])) {
      return nums[i];
    }
    check.add(nums[i]);
  }
  return null;
}

console.log(firstRepeatedNumber([3, 1, 4, 1, 3]));
console.log(firstRepeatedNumber([5, 2, 5, 2]));
console.log(firstRepeatedNumber([1, 2, 3, 4]));
console.log(firstRepeatedNumber([]));
