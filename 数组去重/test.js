let arr = [3, 1, 1, 3]

function unique (arr) {
    let obj = {}
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            continue
        } else {
            res.push(arr[i])
            obj[arr[i]] = 1
        }
    }

    return res
}



console.log(unique(arr))