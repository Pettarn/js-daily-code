/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let dp = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + dp[i-1]
    }

    let arr = []

    // 分组
    // 一个长度为6的数组，分成n份。
    function setGroup (m) {
        while (m > 0) {
            
        }
    }

    // [1, 3, 2]
    function countMax (arr) {
        let count = []
        count[0] = dp[arr[0]-1]
        for (let i = 1; i < arr.length; i++) {
            count[i] = dp[arr[i]-1] - count[i-1]
        }
        let max = Math.max(...count)
        return max
    }

    console.log(arr)
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {
        arr1[i] = countMax(arr[i])
    }

    return Math.min(...arr1)
    
};

console.log(splitArray([7,2,5,10,8], 2))