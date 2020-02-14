// toString
let arr = [1, [2, [3, [4, [5]]]]]

function flat (arr) {
    arr = arr.toString().split(',').map((item) => +item)
    return arr
}

console.log(flat(arr))

