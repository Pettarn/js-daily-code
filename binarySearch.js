/**
 * 不支持查找含有多个相同元素的数组
 */
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 一共有两行输入，第一行是被搜索的有序序列arr，第二行是要查找的数x
var rows = 2
var inputs = []
rl.on('line', function (line) {
    inputs.push(line)
    if(inputs.length === rows) {
        // #########
        // console.log(inputs)
        deal(inputs)
        inputs = []
    }
})

function deal (inputs) {
    var arr = inputs[0].split(' ')
    var x = inputs[1].split(' ')
    binarySearch(arr, x)
}

function binarySearch (arr, x) {
    //左边界，右边界
    var left = 0
    var right = arr.length - 1
    while (left < right) {
        var middle = (left + right) / 2
        middle = Math.round(middle)
        if(x == arr[middle]) {
            console.log(middle)
            return
        }
        else if(x < arr[middle]) {
            right = middle
        }
        else if(x > arr[middle]) {
            left = middle
        }
    }
}