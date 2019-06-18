var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (line) {
    deal(line)
})

function deal (line) {
    line = line.split(' ')
    line = mergeSort(line)
    line = line.join(' ')
    console.log(line)
}


//归并，排序
//归并
//排序：建立一个空的数组，然后把将要合并的两个数组的元素相互比较，较小的先进，较大的
function mergeSort (line) {
    var child = []
    child.length = line.length
    for(var i = 0; i<line.length/2; i++) {
        child[i]
    }
}