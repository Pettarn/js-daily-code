// JSON
let obj = {
    val: 1,
    subObj: {
        val: 2,
        grandSubObj: {
            val: 3
        }
    },
    method () {
        console.log('a')
    }
}

let result = JSON.parse(JSON.stringify(obj))
console.log(result !== obj ? result : 'bug')