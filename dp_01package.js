var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var h = 4
var inputs = []
rl.on('line', function (line) {
    inputs.push(line)
    if(inputs.length === h) {
        deal(inputs)
        inputs = []
    }
})

function deal (inputs) {
    var j = +inputs[0]//number类型
    var n = +inputs[1]//number类型
    var val = inputs[2].join('')//string array类型
    var w = inputs[3].join('')//string array类型
    val = val.map(x => +x)//number array类型
    w = w.map(x => +x)//number array类型
    knapSack(j, n, val, w)
}

function knapSack (j, n, val, w) {
    
}