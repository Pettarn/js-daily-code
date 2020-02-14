// Set
let arr = [1, 2, 2, 3, 1]

function unique (arr) {
    arr = Array.from(new Set(arr))
    return arr
}

arr = unique(arr)

console.log(arr)