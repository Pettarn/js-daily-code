var line;
let input = []
while((line = read_line()) != ''){
    input.push(line)
}
// 第一行 input[0]
// 第二行 input[1]
// ===========

let n = +input[0].split(' ')[0]
let arr1 = input[1].split(' ')
let arr2 = input[2].split(' ')

function quickSort (arr) {
    let length = arr.length
    if (length === 1) {
        return arr
    } else if (length <= 0) {
        return []
    }
    let left = []
    let right = []
    for (let i = 1; i < length; i++) {
        if (arr[i] <= arr[0]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // let leftLength
    return quickSort(left).concat(arr[0], quickSort(right))
}

let len = arr1.length


for (let i = 0; i < len; i++) {
    arr1[i] = +arr1[i]
    arr2[i] = +arr2[i]
}


arr1 = quickSort(arr1)
arr2 = quickSort(arr2)

// console.log(arr1)
let sum1 = sum2 = 0

if (len < 3) {
    // console.log('bug')
    // for (let i = 0; i < len; i++) {
    //     sum1 += arr1[i]
    //     sum2 += arr2[i]
    // }
    // if (sum1 >= sum2) {
    //     print(sum1)
    // } else {
    //     print(sum2)
    // }
    print(null)
} else {
    let result1 = arr1.slice(-3)
    let result2 = arr2.slice(-3)
    
    
    for (let i = 0; i < 3; i++) {
        sum1 += result1[i]
        sum2 += result2[i]
    }
    
    if (sum1 >= sum2) {
        print(sum1)
    } else {
        print(sum2)
    }

}

