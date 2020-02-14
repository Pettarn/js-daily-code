// 把数组的每个元素当作对象的属性，但是数组中有Symbol类型的数据就不行了。
let arr = [1, 2, 2, 3]

function unique (arr) {
    let obj = {}
    let res = []
    for (let item of arr) {
        if (!obj[item]) {
            obj[item] = 1
            res.push(item)
        } else {
            continue
        }
    }
    return res
}

arr = unique(arr)
console.log(arr)