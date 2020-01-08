/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    
    // 从小到大排序
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
    
    let RES = []
    nums = quickSort(nums)

    // 将合格的push到RES中
    function push (a) {
        
        if (a.length < 3) {
            return 
        }
        if (a.length === 3) {
            if (a[0] + a[1] + a[2] === 0) {
                RES.push([a[0], a[1], a[2]])
                return
            }
        }
        let [i, j] = [0, a.length-1]
        let temp = a.indexOf(0)
        if (temp !== -1) {
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
        } else {
            // [-4, -1, 2, 3, 5]
            if (a[i] + a[j] === 0) {
                push(a.slice(1))
                push(a.slice(0, -1))
            } else if (a[i] + a[j] > 0) {
                let k = i + 1
                while(a[k] < 0) {
                    if (a[i] + a[k] + a[j] === 0) {
                        RES.push([a[i], a[k], a[j]])
                        break
                    } else {
                        k++
                    }
                }
                push(a.slice(1))
                push(a.slice(0, -1))
            } else if (a[i] + a[j] < 0) {
                let k = j - 1
                while(a[k] > 0) {
                    if (a[i] + a[k] + a[j] === 0) {
                        RES.push([a[i], a[k], a[j]])
                        break
                    } else {
                        k--
                    }
                }
                push(a.slice(1))
                push(a.slice(0, -1))
            }
        }
    }   

    // 二维数组去重
    function unique (a) {
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

    
    if (nums.length < 3) {
        return []
    } 
    if (nums.toString().indexOf('0,0,0') !== -1) {
        RES.push([0, 0, 0])
    }
    push(nums)
    RES = unique(RES)
    return RES
};



let a = threeSum([5,1,-4,-10,9,-1,-4,-5,-8,3,1,4,2,-8,-4,3,-4,-5,1,7,8,6,2,8])
console.log(a)