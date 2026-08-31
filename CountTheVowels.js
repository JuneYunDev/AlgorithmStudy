/*
Problem : Given a lowercase string called text, return the nuber of vowels in the string.
The vowels are : a, e, i, o, u
*/

function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
      case "e":
      case "o":
      case "i":
      case "u":
        count++;
        break;
    }
  }
  return count;
}

console.log(countVowels("javascript"));
console.log(countVowels("rhythm"));
console.log(countVowels(""));
console.log(countVowels("aeiou"));

// Time Complexity : O(n)
// Extra Spcae Complexity : O(1)
