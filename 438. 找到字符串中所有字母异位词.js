/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    let len = s.length;
    let slide = p.length;
    if (len < slide) {
        return [];
    }
    let result = [];
    let pArr = new Array(26).fill(0);
    let chipArr = new Array(26).fill(0);

    for (let i = 0; i < slide; i++) {
        pArr[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        chipArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = slide; i < len; i++) {
        if (pArr.join('') === chipArr.join('')) {
            result.push(i - slide);
        }
        chipArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        chipArr[s.charCodeAt(i - slide) - 'a'.charCodeAt(0)]--;
    }
    if (pArr.join('') === chipArr.join('')) {
        result.push(len - slide);
    }

    return result;
};

let s = "abab";
let p = "ab";
console.log(findAnagrams(s, p));