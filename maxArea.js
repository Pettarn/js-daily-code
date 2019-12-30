/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length
    let arr = []
    let result = 0
    let h

    for (let i = 0; i < len; i++) {
        arr[i] = [i, height[i]]
    }

    for (let i = 0; i < len; i++) 
        for (let j = i + 1; j < len; j++) {
            if (arr[i][1] < arr[j][1]) {
                h = arr[i][1]
            } else {
                h = arr[j][1]
            }
            if (result < h * (j-i)) {
                result = h * (j-i)
            }
        }
    return result
};

maxArea([1, 2, 3])