/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    function quickSort (nums) {
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
    
    nums = quickSort(nums)
    
    let RES = []

    // [-4, -1, 0, 2, 2, 4]
    function push (a) {
        if (a.length < 3) {
            return
        }
        let [i, j] = [0, a.length-1]
        let temp = a.indexOf(0)
        if (a[i] + a[j] < 0) {
            for (let k = j-1; k > temp; k--) {
                if (a[i] + a[j] + a[k] === 0) {
                    RES.push([a[i], a[k], a[j]])
                    break
                }
            }
            push(a.slice(1))
            push(a.slice(0, -1))
        } else if (a[i] + a[j] > 0) {
            for (let k = i+1; k < temp; k++) {
                if (a[i] + a[j] + a[k] === 0) {
                    RES.push([a[i], a[k], a[j]])
                    break
                }
            }
            push(a.slice(1))
            push(a.slice(0, -1))    
        } else {
            RES.push([a[i], 0, a[j]])
            push(a.slice(1))
            push(a.slice(0, -1))
        }
    }   
    
    push(nums)
    
    RES = [...new Set(RES)]
    return RES
};


let a = threeSum([-2, -1, 0, 1, 2])
console.log(a)