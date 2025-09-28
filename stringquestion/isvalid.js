function isValid(s) {
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === "}" || s[i] === "]" || s[i] === ")") {
      if (stack.length == 0 || stack.pop() != pairs[s[i]]) {
        return false;
      }
    }
  }
  return stack.length == 0;
}
console.log(isValid("{[]}"));
console.log(isValid("{([]}"));
