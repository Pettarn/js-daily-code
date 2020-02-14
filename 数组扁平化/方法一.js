// Array.prototype.flat()
let arr = [1, [1, 2, [3, 3, [1]]]]

function flat (arr) {
    let res = arr.flat(Infinity)
    return res
}

console.log(flat(arr))

