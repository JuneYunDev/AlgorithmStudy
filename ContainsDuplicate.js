/*
Problem : Given an integer array nums, return true if any number appears at least twice. Return false if every number is unique.
*/

function containsDuplicate(nums) {
  const check = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (check.has(nums[i])) {
      return true;
    }
    check.add(nums[i]);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([]));
