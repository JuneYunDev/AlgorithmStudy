/*
Problem : Given a lowercase string text and an integer k, return the maximum number of vowels in any substring of length k.

The vowels are a, e, i, o, and u.
*/

function maxVowels(text, k) {
  let windowVowels = 0;
  for (let i = 0; i < k; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      windowVowels++;
    }
  }
  let maxVowels = windowVowels;
  if (maxVowels === k) {
    return k;
  }
  for (let i = k; i < text.length; i++) {
    if (
      text[i - k] == "a" ||
      text[i - k] == "e" ||
      text[i - k] == "i" ||
      text[i - k] == "o" ||
      text[i - k] == "u"
    ) {
      windowVowels = windowVowels - 1;
    }
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      windowVowels = windowVowels + 1;
    }
    if (windowVowels > maxVowels) {
      maxVowels = windowVowels;
    }
  }
  return maxVowels;
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("rhythm", 3));
console.log(maxVowels("a", 1));
