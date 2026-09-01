/*
Problem : Given a string called text, return a new string with its characters in reverse order.
Do not use the built-in reverse() method.
*/

function reverseString(text) {
  let result = [];
  for (let i = text.length - 1; i >= 0; i--) {
    result.push(text[i]);
  }
  return result.join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString(""));

//Time Complexity : O(n)
//Space Complexity : O(n)
