// 1. 完成函数 flatten，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组
// function flatten(arr) {
//     // 请在此完成函数逻辑
// }

// console.log(flatten([1, [2, [3, 4], 5], 6])); 
// // [1, 2, 3, 4, 5, 6] 


// 2. URLSearchParams() 接口是用来解析和处理 URL 参数的 API，目前最新的浏览器和 Node 都支持它。请用 class URLSearchParams {} 语法实现一个该接口的 polyfill，考虑到时间因素，只需实现下面列举的要求即可：

// ```javascript
// // 构造函数支持传入 URL 参数串
// let searchParams = new URLSearchParams("foo=1&bar=2")

// // 构造函数也支持传入一个包含参数键值对的对象
// searchParams = new URLSearchParams({foo: "1", bar: "2"})

// // 实例支持 get()、set()、has()、append() 四个方法
// console.log(searchParams.get("foo")) // "1"
// searchParams.set("foo", "22") 
// console.log(searchParams.has("bar")) // true
// searchParams.append("foo", "33") 

// // 实例支持 toString() 方法
// console.log(searchParams.toString()) // "foo=22&bar=2&foo=33"

// // 实例支持 for-of 迭代
// for(const [key, value] of searchParams) {
//   console.log([key, value])
//   // ["foo", "22"]
//   // ["bar", "2"]
//   // ["foo", "33"]
// }

// ```

// function flatten(arr) {
//     let newNum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             newNum = [...newNum, ...flatten(arr[i])]
//         } else {
//             newNum.push(arr[i])
//         }
//     }
//     return newNum
// }
// let arr = [1, [2, 3], [4, [5]]]
// console.log(flatten(arr));

class URLSearchParams {
    constructor(url) {
        this.url = this.praseUrl(url)
    }
    praseUrl(url) {
        if (typeof url === 'string') {
            let obj = {}
            let params = url.split('&')
            for (let i = 0; i < params.length; i++) {
                let param = params[i].split('=')
                obj[param[0]] = param[1]
            }
            return obj
        } else if (typeof url === 'object') {
            return url
        }
    }
    get(key) {
        for (let param in this.url) {
            if (param === key) {
                return this.url[key]
            }
        }
    }
    set(key, value) {
        if (this.has(key)) {
            for (let param in this.url) {
                if (param === key) {
                    this.url[key] = value
                }
            }
        } else {
            this.url.append(key, value)
        }

    }
    has(key) {
        for (let param in this.url) {
            if (param === key) {
                return true
            }
        }
    }
    append(key, value) {
        let newUrl = this.toString(this.url) + '&' + `${key}=${value}`
        this.url = this.praseUrl(newUrl)
    }
    toString() {
        let params = []
        for (let param in this.url) {
            params.push(param + '=' + this.url[param])
        }
        return params.join('&')
    }
}

let searchParams = new URLSearchParams("foo=1&bar=2")
// console.log(searchParams.url);
// console.log(searchParams.get('foo'));
console.log(searchParams.toString());
// for (const [key, value] of searchParams) {
//     console.log([key, value])
// }
console.log(searchParams.append('foo', 22));
console.log(searchParams.append('foo', 33));
console.log(searchParams.toString());

['foo', '1', 'bar', '2']