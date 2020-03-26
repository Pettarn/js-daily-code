function deepClone (obj) {
    if (typeof obj === 'object') {
        let result = Object.prototype.toString.call(obj) === '[Object Array]' ? [] : {}
        for (let key in obj) {
            result[key] = deepClone(obj[key])
        }
        return result
    } else {
        return obj
    }
}

let eg = {
    name: 'Tom',
    child: {
        name: 'a',
        age: 10,
        child: {
            age: 1
        }
    },
    talk () {
        console.log('bug')
    }
}

let result = deepClone(eg)

console.log(result, result === eg)
