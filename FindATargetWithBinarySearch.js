/*
Problem : Given a sorted array of integers nums and an integer target, return the index of target.

If target does not exist in the array, return -1.

Do not use indexOf(), findIndex(), or a linear for loop.
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
console.log(binarySearch([2, 4, 6, 8], 2));
console.log(binarySearch([2, 4, 6, 8], 5));
console.log(binarySearch([], 3));

//Time Complexity : O(log n)
//Space Complexity : O(1)

/*
I compare the target with the middle element of the sorted array. If the target is larger, I search the right half. If it is smaller, I search the left half. Each iteration reduces the search range by half. Therefore, the algorithm takes O(log n) time and O(1) space.
*/
