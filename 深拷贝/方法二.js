// 递归
let obj = {
    val: 1,
    subObj: {
        val: 2,
        grandObj: {
            val: 3
        }
    },
    method () {
        console.log('a')
    }
}

function deepClone (obj) {
    let result = {}
    for (let item in obj) {
        if (typeof item !== "object") {
            result[item] = obj[item]
        } else {
            result[item] = deepClone(obj[item])
        }
    }
    return result
}

let result = deepClone(obj)

console.log(result !== obj ? result : 'bug')