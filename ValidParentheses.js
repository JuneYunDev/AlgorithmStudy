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
  return stack.length === 0;
}

console.log(isValidParentheses("{[]}")); // true
console.log(isValidParentheses("(([]){})")); // true
console.log(isValidParentheses("{[}]")); // false
console.log(isValidParentheses("{")); // false
console.log(isValidParentheses("]")); // false

//Time Complexity : O(n)
//Space Complexity : O(n)
/*
I push each opening bracket onto the stack. When I encounter a closing bracket, I check whether it matches the most recent opening bracket. If they do not match, I return false. After processing the entire string, the stack must be empty. The algorithm takes O(n) time and O(n) space.
*/
