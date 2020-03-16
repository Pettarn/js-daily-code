var line;
let input = []
while((line = read_line()) != ''){
    input.push(line)
}

// 第一行 input[0]
// ==========
let n = +input[0].split(' ')[0]

let dp = []

dp[0] = 0
dp[1] = 1
dp[2] = 1
for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
}

print(dp[n])