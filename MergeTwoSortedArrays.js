/*
Problem

Given two arrays nums1 and nums2, both sorted in ascending order, return a new array containing all their numbers in ascending order.

Do not use JavaScript’s sort() method.
*/

function mergeSortedArrays(nums1, nums2) {
  let point1 = 0;
  let point2 = 0;
  const merge = [];
  let m = nums1.length;
  let n = nums2.length;

  for (let i = 0; i < m + n; i++) {
    if (nums1[point1] <= nums2[point2]) {
      merge[i] = nums1[point1];
      point1++;
    } else if (nums1[point1] > nums2[point2]) {
      merge[i] = nums2[point2];
      point2++;
    } else if (point1 > nums1.length - 1) {
      merge[i] = nums2[point2];
      point2++;
    } else if (point2 > nums2.length - 1) {
      merge[i] = nums1[point1];
      point1++;
    }
  }
  return merge;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2, 7], [3, 4]));
console.log(mergeSortedArrays([], [2, 5]));
console.log(mergeSortedArrays([], []));

//Time Complexity : O(n+m) => O(n)
//Space Complexity : O(n+m) => O(n)
/*
The algorithm takes O(m + n) time and uses O(m + n) space for the output array. Excluding the output array, it uses O(1) auxiliary space.
*/
