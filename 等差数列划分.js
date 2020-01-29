/**
 * @param {number[]} A
 * @return {number}
 * 1 2 3 7 4 5 6
 * 3 = 1
 * 4 = 2 + 1
 * 5 = 3 + 2 + 1
 * 6 = 4 + 3 + 2 + 1
 * 判断等差数列的长度和有几个等差数列
 * dp[n] = dp[n-1]
 */
var numberOfArithmeticSlices = function(A) {
    if (A.length < 3) {
        return 0s
    }
    let dp = []
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i < A.length; i++) {
        dp[i] = JSON.parse(JSON.stringify(dp[i-1])) 
        if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
            dp[i][dp[i].length-1] += 1
        }
    }
};