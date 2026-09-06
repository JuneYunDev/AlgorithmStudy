/*
Problem : Given a lowercase string text, return true if it reads the same forward and backward. Otherwise, return false.

Do not create a reversed copy of the string.
*/

function isPalindrome(text) {
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("aa"));
console.log(isPalindrome(""));

//Time Complexity : O(n)
//Extra Space Complexity : O(1)
