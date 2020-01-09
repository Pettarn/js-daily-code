/**
 * @param {number[]} prices
 * @return {number}
 */

// 7, 5, 7, 3, 1
// 一片区域最低的买入，最高的卖出，最低的在最高的前面。
/**
 * 
 * dp[0]: Array
 * dp[0][0] 最小值
 * dp[0][1] 最大值
 * 
 * max = 2
 * dp[0]: [7, 0]
 * dp[1]: [5, 0]
 * dp[2]: [5, 7]
 * dp[3]: [3, 0]
 * dp[4]: [1, 0]
 * dp[5]: [1, 6]
 */

var maxProfit = function(prices) {
    let dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(2).fill(null)
    }
    dp[0] = [prices[0], 0]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < dp[i-1][0]) {
            dp[i][0] = prices[i]
            dp[i][1] = 0
            continue
        } else {
            dp[i][0] = dp[i-1][0]
            if (prices[i] > dp[i-1][1]) {
                dp[i][1] = prices[i]
            } else {
                dp[i][1] = dp[i-1][1]
            }
            if (max < dp[i][1] - dp[i][0]) {
                max = dp[i][1] - dp[i][0]
            }
        }

    }
    return max
};

console.log(maxProfit([7, 1, 7, 3, 10]))