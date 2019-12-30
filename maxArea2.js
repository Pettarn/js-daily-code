/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length
    let [i, j] = [0, len-1]
    let result = 0
    let lastHeight = 0
    while (i < j) {
        if (height[i] < height[j]) {
            if (height[i] > lastHeight) {
                lastHeight = height[i]
                result = (j-i) * height[i] > result ? (j-i) * height[i] : result
            }
            i++
        } else {
            if (height[j] > lastHeight) {
                lastHeight = height[j]
                result = (j-i) * height[j] > result ? (j-i) * height[j] : result
            }
            j--
        }
    }

    return result
};