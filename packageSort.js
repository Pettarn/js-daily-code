/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {

    let len = A.length
    if (len === 0) {
        return []
    }

    let kArr = []
    let newArr = []

    // 找出最大的值的坐标
    function maxIndex (arr) {
        let max = 0
        for (let i = 1; i < len; i++) {
            if (arr[max] < arr[i]) {
                max = i
            }
        }
        return max
    }

    function specMaxIndex (arr) {
        let max = 0
        for (let i = 1; i < len; i++) {
            if (arr[max] <= arr[i]) {
                max = i
            }
        }
        return max
    }

    // 翻转数组
    function turnUp (arr) {
        let newArr = []
        for (let i = arr.length-1; i >= 0; i--) {
            newArr.push(arr[i])
        }
        return newArr
    }

    // 判断最右边是最大的了吗,如果是，那就把最大的截掉
    function split (arr) {
        let max = specMaxIndex(arr) 
        if (max === arr.length - 1) {
            arr.splice(max)
        }
        return arr
    }

    function core () {
        if (A.length === 0) {
            return kArr
        }

        if (maxIndex(A) === 0) {
            // 把最大的弄到最右边
            let k = A.length
            newArr = turnUp(A.slice(0, k))
            A = newArr.concat(A.slice(k))
            A = split(A)
            kArr.push(k)
            if (A.length === 0) {
                return kArr
            }
        }

        A = split(A)

        if (maxIndex(A) !== 0) {
            let k = maxIndex(A) + 1
            newArr = turnUp(A.slice(0, k))
            A = newArr.concat(A.slice(k))
            A = split(A)
            kArr.push(k)
            if (A.length === 0) {
                return kArr
            }
        }

        return core()

    }


    kArr = core()

    // console.log(kArr)
    return kArr
};

let arr = [1, 2, 5, 3]

pancakeSort(arr)