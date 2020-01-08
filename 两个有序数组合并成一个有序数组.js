let a = [1, 1, 1]
let b = [2, 4, 4]

// 第一位比较，谁比较小谁先进，然后
let [i, j] = [0, 0]
let res = []

while (i < 3 && j < 3) {
    if (a[i] > b[j]) {
        res.push(b[j])
        j++
    } else {
        res.push(a[i])
        i++
    }
}

if (i === a.length) {
    res = res.concat(b.slice(j))
} else if (j === b.length) {
    res = res.concat(a.slice(i))
}

console.log(res)
