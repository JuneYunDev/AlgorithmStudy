/* 
Problem : Runing Sum of an Array
Given an array of nubers called nums, return a new array where each element is the sum of all elements from the beginning of nums up to the current position. 
*/

function runningSum(nums) {
  let sumArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    sumArr[i] = sum;
  }
  return sumArr;
}

console.log(runningSum([1, 2, 3, 4]));

// Time complexity : O(n)
// Space complexity : O(n)
