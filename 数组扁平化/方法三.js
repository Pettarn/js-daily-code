// 暴力
let arr = [1, [2, [3, [4, [5]]]]]

function flat (arr) {
    let res = []

    for (let item of arr) {
        if (Object.prototype.toString.call(item) === '[object Array]') {
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    }

    return res
}

console.log(flat(arr))