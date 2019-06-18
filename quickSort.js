var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (line) {
    deal(line)
})

function deal(line) {
    line = line.split(' ')
    console.log(line)
    line = quickSort(line)
    var result = ''
    for (var i = 0; i < line.length; i++) {
        result += i === line.length - 1 ? line[i] : line[i] + ' '
    }
    console.log(result)
}

function quickSort(line) {

    if (line.length === 1) {
        return line
    }
    if (line.length === 0) {
        return []
    }

    var firstEle = line[0]
    var left = []
    var middle = []
    var right = []
    for (var i = 0; i < line.length; i++) {
        if (line[i] < firstEle) {
            left.push(line[i])
        }
        else if (line[i] > firstEle) {
            right.push(line[i])
        }
        else {
            middle.push(line[i])
        }
    }
    var result = quickSort(left).concat(middle, quickSort(right))
    return result
}