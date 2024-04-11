/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let rest = []
    for (let i = 0; i < gas.length; i++) {
        rest.push(gas[i] - cost[i])
    }
    let sum = rest.reduce((cur, acc) => cur + acc, 0)
    if (sum < 0) {
        return -1
    }
    let start = 0
    let remaining = 0
    for (let i = 0; i < rest.length; i++) {
        remaining += rest[i]
        if (remaining < 0) {
            remaining = 0
            start = i + 1
        }
    }
    return start

};
let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
console.log(canCompleteCircuit(gas, cost));