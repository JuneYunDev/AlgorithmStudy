/*
Problem : Given a string text containing only (, ), {, }, [ and ], return true if all brackets are correctly matched and closed in the correct order. Otherwise, return false.
*/

function isValidParentheses(text) {
  const stack = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(" || text[i] === "{" || text[i] === "[") {
      stack.push(text[i]);
    } else if (text[i] === ")" || text[i] === "}" || text[i] === "]") {
      if (stack[stack.length - 1] === "(" && text[i] === ")") {
        stack.pop();
      } else if (stack[stack.length - 1] === "{" && text[i] === "}") {
        stack.pop();
      } else if (stack[stack.length - 1] === "[" && text[i] === "]") {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("([{}])"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses(""));
