/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = []
    for (let i = 2; i <= n; i++) {
        dp[i] = i-1
    }
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i-1; j++) {
            dp[i] = Math.max(j*(i-j), dp[i], j*dp[i-j])   
        }
    }

    return dp[n]
};

console.log(integerBreak(7))