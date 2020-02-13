function func () {
    let count = 0

    return function () {
        count++
        return count
    }
}

let a = func()()
let b = func()()

console.log(a)
console.log(b)