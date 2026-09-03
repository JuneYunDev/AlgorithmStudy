/*
Problem : Given a lowercase string text, return a Map containing how many times each character appears.

Each character should be a key, and its frequency should be the value.

Example 1
Input: text = "banana"

Output:
b → 1
a → 3
n → 2
*/

function countCharacters(text) {
  const check = new Map();
  for (let i = 0; i < text.length; i++) {
    if (check.has(text[i])) {
      check.set(text[i], check.get(text[i]) + 1);
    } else {
      check.set(text[i], 1);
    }
  }
  return check;
}

console.log(countCharacters("banana"));
console.log(countCharacters("hello"));
console.log(countCharacters(""));

//Time Complexity : O(n)
//Space Complexity : O(n)
//The algorithm takes O(n) time and O(k) space, where k is the number of unique characters. In the worst case, the space complexity is O(n).
