function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack[stack.length - 2] =
        stack[stack.length - 1] + stack[stack.length - 2];
      stack.pop();
    } else if (tokens[i] === "-") {
      stack[stack.length - 2] =
        stack[stack.length - 2] - stack[stack.length - 1];
      stack.pop();
    } else if (tokens[i] === "*") {
      stack[stack.length - 2] =
        stack[stack.length - 2] * stack[stack.length - 1];
      stack.pop();
    } else if (tokens[i] === "/") {
      stack[stack.length - 2] = ~~(
        stack[stack.length - 2] / stack[stack.length - 1]
      );
      stack.pop();
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
}
