var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var k = 2
var inputs = []
rl.on('line', function(line) {
    inputs.push(line)
    if(inputs.length === k) {
        deal(inputs)
        inputs = []
    }
})

function deal (inputs) {
    console.log(inputs[0] + inputs[1])
}