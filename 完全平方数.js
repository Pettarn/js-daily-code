/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = []
    for (let i = 0; i <= n; i++) {
        dp[i] = i
    }
    for (let i = 1; i <= n; i++) {
        for (j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i-j*j] + 1, dp[i])
        }
    }

    return dp[n]
};

console.log(numSquares(13))