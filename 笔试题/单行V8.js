var line;
let input = []
while((line = read_line()) != ''){
    input.push(line)
}

// 第一行 input[0]
// ==========
let a = +input[0].split(' ')[0]
let b = +input[0].split(' ')[1]

print(a + b)