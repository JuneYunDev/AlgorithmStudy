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

console.log(containsDuplicate([]));
console.log(containsDuplicate([7]));
console.log(containsDuplicate([7, 7]));
console.log(containsDuplicate([1, 2, 1, 3]));

// Time Complexity : O(n)
// Space Complexity : O(n)
/*
I use a Set to store numbers I have already seen.
For each number, I first check whether the Set already contains it.
If it already exists, I return true.
Otherwise, I add the number to the Set.
If the loop finishes without finding a duplicate, I return false.
*/
