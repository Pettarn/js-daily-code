Array.prototype.__reduce = function (callback) {
    let count = this.length
    let acc = 0
    // index === count-1 的时候停止调用
    for (let i = 0; i < count; i++) {
        acc = callback(acc, this[i], i)
    }
    return acc
}

let arr = [1, 2, 3, 4, 5]
let result = arr.__reduce((acc, cur) => {
    return acc += cur
})

console.log(result)