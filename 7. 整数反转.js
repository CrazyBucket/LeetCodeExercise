/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let max = Math.pow(2, 31)
    let result = String(x).split('')
    if (result[0] === '-') {
        result = result.slice(1).reverse()
        return Number('-' + result.join('')) < -max ? 0 : Number('-' + result.join(''))
    } else {
        result = result.reverse()
        return Number(result.join('')) > (max - 1) ? 0 : Number(result.join(''))
    }
};
console.log(reverse(-100002));