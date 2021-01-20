const s = "3[a]2[bc]";
const b = "3[a2[c]]";
const c = "2[abc]3[cd]ef";
const d = "abc3[cd]xyz"

let isParenthesisMatching = (str) => {
  let stack = [];
  let numRepeat = null;
  let start = null;
  let stops = [];

  let currStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];

    if (char === "[") {
      numRepeat = str[i - 1];
      start = i;
      if (stops.length > 1) {
        currStr = str.substring(start + 1, stops[0]);
        stack.unshift(currStr.repeat(numRepeat));
        stops.splice(0, 1);
      } else {
        currStr = str.substring(start + 1, stops[0]);
        stack.unshift(currStr.repeat(numRepeat));
      }
    } else if (char === "]") {
      stops.unshift(i);
    } else if (!stops.length > 0) {
      stack.unshift(char);
    }
  }
  return stack.join("");
};

console.log(isParenthesisMatching(s));
console.log(isParenthesisMatching(b));
console.log(isParenthesisMatching(c));
console.log(isParenthesisMatching(d));
