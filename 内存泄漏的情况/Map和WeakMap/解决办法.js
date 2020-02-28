let obj = {
    name: 'Tom'
}

let map = new WeakMap()

map.set(obj, 1)

obj = null

console.log(map.get(obj))
