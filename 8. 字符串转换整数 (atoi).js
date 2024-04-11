/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let str = s.trim();
    let max = str[0] === '-' ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
    let test = (s) => {
        if (!s) {
            return 0
        }
        let result = []
        for (let i = 0; i < s.length; i++) {
            if (isNaN(parseInt(s[i]))) {
                if (result.length === 0) {
                    return 0
                } else {
                    if (Math.abs(Number(result.join(""))) > max) {
                        return max;
                    }
                    return result.join("");
                }
            }
            result.push(s[i])
        }
        if (Math.abs(Number(result.join(""))) > max) {
            return max
        }
        return result.join("");
    }
    if (str[0] === "+" || str[0] === "-") {
        return str[0] + test(str.slice(1, str.length))
    } else {
        return test(str)
    }
};