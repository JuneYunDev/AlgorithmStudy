/*
Problem : Given a string text containing only ( and ), return true if every opening parenthesis has a matching closing parenthesis in the correct order. Otherwise, return false.
*/

function isBalancedParentheses(text) {
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    let component = text[i];

    if (component == "(") {
      stack.push(component);
    } else if (component == ")" && stack.length > 0) {
      stack.pop();
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

console.log(isBalancedParentheses("()"));
console.log(isBalancedParentheses("(())"));
console.log(isBalancedParentheses("(()"));
console.log(isBalancedParentheses(")("));
console.log(isBalancedParentheses(""));

//Time Complexity : O(n)
//Space Complexity : O(n)
/*
I use a stack to store opening parentheses. When I find a closing parenthesis, I remove one opening parenthesis from the stack. If the stack is empty before removing, I return false. After checking every character, I return true only if the stack is empty. The algorithm takes O(n) time and O(n) space.
*/
