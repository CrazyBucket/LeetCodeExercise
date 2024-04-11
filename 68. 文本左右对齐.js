/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let ans = []
    let stack = []
    let curWidth = 0
    for (let i = 0; i < words.length; i++) {
        if (stack.length === 0) {
            stack.push(words[i])
            curWidth = words[i].length
        } else {
            if (curWidth + words[i].length + 1 <= maxWidth) {
                if (curWidth + words[i].length + 1 < maxWidth) {
                    stack.push(words[i])
                    curWidth = curWidth + words[i].length + 1
                } else {
                    stack.push(words[i])
                    ans.push(stack.join(' '))
                    stack = []
                    curWidth = 0
                }
            } else {
                if (stack.length === 1) {
                    ans.push(stack[0] + ' '.repeat(maxWidth - stack[0].length));
                    stack = [words[i]]
                    curWidth = words[i].length
                } else {
                    let wordsWidth = stack.reduce((acc, word) => acc + word.length, 0);
                    const spacesToAdd = Math.floor((maxWidth - wordsWidth) / (stack.length - 1));
                    const extraSpaces = (maxWidth - wordsWidth) % (stack.length - 1);
                    let line = '';
                    for (let j = 0; j < stack.length - 1; j++) {
                        line += stack[j] + ' '.repeat(spacesToAdd + (j < extraSpaces ? 1 : 0));
                    }
                    line += stack[stack.length - 1];
                    ans.push(line);
                    stack = [words[i]];
                    curWidth = words[i].length;
                }
            }
        }
    }
    if (stack.length > 0) {
        let lastLine = stack.join(' ');
        lastLine += ' '.repeat(maxWidth - lastLine.length);
        ans.push(lastLine);
    }
    return ans
};
let words =
    ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"]
    , maxWidth =
        20
console.log(fullJustify(words, maxWidth));
let a = fullJustify(words, maxWidth), b = ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]
for (let i = 0; i < a.length; i++) {
    console.log(a[i], b[i]);
    console.log(a[i].length, b[i].length);
}