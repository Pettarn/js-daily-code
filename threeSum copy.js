/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {


    // 从小到大排序
    function quickSort(nums) {
        if (nums.length === 0 || nums.length === 1) {
            return nums
        }
        let flag = nums[0]
        let left = []
        let right = []
        let res = []
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < flag) {
                left.push(nums[i])
            } else {
                right.push(nums[i])
            }
        }
        left.push(flag)
        res = quickSort(left).concat(quickSort(right))
        return res
    }

    let RES = []
    nums = quickSort(nums)

    // 二维数组去重
    function unique(a) {
        let obj = {}
        let uni = []
        for (let i = 0; i < a.length; i++) {
            // a[i] = a[i].toString()
            if (obj[a[i].toString()]) {
                continue
            } else {
                obj[a[i].toString()] = 1
                uni.push(a[i])
            }
        }
        return uni
    }

    // 将合格的push到RES中
    // [-4, -1, 0, 0, 0, 2, 2, 5]
    function pushItem(a) {
        if (a.length < 3) {
            return
        }
        let [i, j] = [0, a.length-1]
        while (i < j) {
            if (a[i] > 0) {
                continue
            }
        }
    }

    if (nums.length < 3) {
        return []
    }
    pushItem(nums)
    RES = unique(RES)
    return RES
};



// let a = threeSum([-1,0,1,2,-1,-4])
let a = threeSum([-4, -1, 2, 3])
console.log(a)