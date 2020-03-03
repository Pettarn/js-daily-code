// 递归
let obj = {
    val: [1, 2, 3],
    subObj: {
        val: 2,
        grandObj: {
            val: 3
        }
    },
    method() {
        console.log('a')
    }
}

function deepClone(obj) {
    let result = {}
    for (let item in obj) {
        if (obj[item] instanceof Array) {
            result[item] = [].slice.call(obj[item])
        } else if (typeof obj[item] === 'function') {
            result[item] = obj[item].bind(result)
        } else if (typeof obj[item] === 'object') {
            result[item] = deepClone(obj[item])
        } else {
            result[item] = obj[item]
        }
    }
    return result
}

let result = deepClone(obj)

console.log(result.val !== obj.val ? result : 'bug')