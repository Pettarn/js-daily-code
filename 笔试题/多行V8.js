var line;
let input = []
while((line = read_line()) != ''){
    input.push(line)
}
// 第一行 input[0]
// 第二行 input[1]
// ===========

let a = +input[0].split(' ')[0]
let b = +input[1].split(' ')[0]


print(a, b);