/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // if (x === 0 || x === 1) {
    //     return x;
    // }
    //  let guess = x / 2; 
    // while (Math.abs(guess * guess - x) > 0.1) {
    //     guess = (guess + x / guess) / 2;
    // }

    // return Math.floor(guess);
    return Math.floor(Math.pow(x, 0.5))
};