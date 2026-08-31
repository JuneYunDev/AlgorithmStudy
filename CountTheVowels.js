/*
Problem : Given a lowercase string called text, return the nuber of vowels in the string.
The vowels are : a, e, i, o, u
*/

function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
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
