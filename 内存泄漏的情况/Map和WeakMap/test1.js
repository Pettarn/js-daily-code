let obj = {
    name: 'Tom'
}

let map = new Map()

map.set(obj, 1)

obj = null

console.log(map.size)

