/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let dp = []
    dp[0] = 0
    let res = [0]
    for (let i = 1; i <= num; i++) {
        // 若为偶数
        if (i % 2 === 0) {
            dp[i] = dp[i/2]
        } else {
            dp[i] = dp[i-1] + 1
        }
        res.push(dp[i])
    }
    
    return res
};
console.log(countBits(3))