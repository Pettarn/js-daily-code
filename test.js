let arr = [1, 2, 3]
let obj = {}
let val = 2

function change (x) {
    // x = typeof x
    x.a = 'hello'
    console.log(x)
}

change(arr)
change(obj)
change(val)

console.log(arr)
console.log(obj)
console.log(val)