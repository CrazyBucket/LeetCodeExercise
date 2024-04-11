/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    let arr = path.replace('//', '/').split('/')
    let queue = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '' && arr[i] !== '.') {
            if (arr[i] === '..') {
                queue.pop()
            } else {
                queue.push(arr[i])
            }
        }
    }
    console.log(queue);
    return '/' + queue.join('/')
}

let path =
    "/a/../../b/../c//.//"
console.log(simplifyPath(path));