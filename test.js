global.myJSON = {
    parse: (sJSON) => eval('(' + sJSON + ')'),
    stringify: (() => {
        let toString = Object.prototype.toString
        return function stringify (val) {
            if (val === null) {
                return 'null'
            } else if (val === undefined) {
                return
            } else if (typeof val === 'boolean' || typeof val === 'string') {
                return '"' + val.toString() + '"'
            } else if (typeof val === 'number') {
                return Number.isFinite(val) ? val : null
            } else if (typeof val === 'function') {
                return undefined
            } else if (typeof val === 'object') {
                if (toString.call(val) === '[object Array]') {
                    let result = '['
                    for (let i = 0; i < val.length; i++) {
                        result += (i ? ', ' : '') + stringify(val[i])
                    }
                    result += ']'
                    return result
                } else if (toString.call(val) === '[object Object]') {
                    if (val.toJSON) {
                        return stringify(val.toJSON)
                    } else {
                        console.log('bug')
                        let result = '{'
                        let arr = []
                        for (let key in val) {
                            arr.push(key)
                        }
                        for (let i = 0; i < arr.length; i++) {
                            console.log(stringify(val[arr[i]]))
                            result += (i ? ', ' : '') + stringify(arr[i]) + ':' + stringify(val[arr[i]])
                        }
                        result += '}'
                        return result
                    }
                }
            }
        }
    })()
}

let arr = {
    name: 'a'
}
let arr2 = {
    name: 'a'
}
arr = myJSON.stringify(arr)
arr2 = JSON.stringify(arr2)
console.log(arr)
console.log(arr2)

// console.log(myJSON.stringify(null))
// console.log(JSON.stringify(null))