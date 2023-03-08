function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i of s) {
    if (stack.length === 0) {
      stack.push(i);
    } else {
      const top = stack[stack.length - 1];
      if (top === "{" && i === "}") {
        stack.pop();
      } else if (top === "[" && i === "]") {
        stack.pop();
      } else if (top === "(" && i === ")") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(isValid("()[]{}"));
