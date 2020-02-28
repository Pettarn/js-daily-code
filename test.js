var n = parseInt(readline());
let ans
let N
let arr
for(var i = 0;i < n; i++){
    if (i === 0) {
        lines = readline().split(" ")
        N = lines[0]
    } else {
        arr = lines
    }
}

arr = arr.sort()


for (let i = N; i <= N+N; i++) {
    ans += N
}
print(ans);