/*
Problem : Given two lowercase strings s and t, return true if t is an anagram of s. Otherwise, return false.

An anagram uses exactly the same characters with exactly the same frequencies, but the order may be different.
*/

function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  } else {
    const original = new Map();
    const solved = new Map();

    for (let i = 0; i < s.length; i++) {
      if (original.has(s[i])) {
        original.set(s[i], original.get(s[i]) + 1);
      } else {
        original.set(s[i], 1);
      }
      if (solved.has(t[i])) {
        solved.set(t[i], solved.get(t[i]) + 1);
      } else {
        solved.set(t[i], 1);
      }
    }

    if (original.size == solved.size) {
      for (let key of original.keys()) {
        if (!solved.has(key) || solved.get(key) !== original.get(key)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

console.log(isAnagram("abbc", "abcc")); // false
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("ab", "ba")); // true
console.log(isAnagram("ab", "abc")); // false
