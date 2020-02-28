// var a = parseInt(lines[0]);
// var b = parseInt(lines[1]);



let result = []
let dp = []
let count = 0

// 判断一个数是否为质数
function check(num) {
    let flag = true
    let limit = Math.round(num / 2)
    if (num === 2 || num === 1) {

    } else if (num === 0) {
        flag = false
    } else {
        for (let i = 2; i <= limit; i++) {
            if (num % i === 0) {
                flag = false
                break
            }
        }
    }
    dp[num] = flag
    return dp[num]
}

// 一个数有多少种两个数位的组合
function funcZu(num) {
    let newNum = '' + num
    let arr = newNum.split('').map(item => +item)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0 || j === i) {
                continue
            }
            let inputNum = parseInt(arr[i] + '' + arr[j])
            let outputFlag = check(inputNum)
            if (outputFlag === true) {
                count++
                return
            }
        }
    }
}

var a = 11
var b = 20

for (let j = a; j <= b; j++) {
    funcZu(j)
}

console.log(count)