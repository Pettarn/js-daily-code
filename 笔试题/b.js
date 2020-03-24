var line;
let input = []
while((line = read_line()) != ''){
    input.push(line)
}
// 第一行 input[0]
// 第二行 input[1]
// ===========

let a = +input[0].split(' ')[0]
let arr = input[1].split(' ')

let length = arr.length
for (let i = 0; i < length; i++) {
    arr[i] = +arr[i]
}

let result = []


let dp = []

dp[0] = [0, 0, 0]
dp[1] = [1, 0, 1]

for (let i = 2; i < length + 1; i++) {
    if (arr[i-1] > arr[i-2]) {
        dp[i] = [Math.max(dp[i-1][0] + 1, dp[i-1][2] + 1), dp[i-1][0], dp[i-1][2] + 1]
    } else {
        dp[i] = [dp[i-1][0], dp[i-1][0], 1]
    }
}

// for (let i = 0; i < dp.length; i++) {
//     console.log(dp[i])
// }

let outputIndex = null
let max = 0
for (let i = 2; i < dp.length; i++) {
    if (dp[i][0] === dp[i][1]) {
        // console.log('bug')
        if (dp[i][0] > max) {
            max = dp[i][0]
            outputIndex = i-2
        }
    }
}

// console.log('值', outputIndex)


print(arr[outputIndex]);