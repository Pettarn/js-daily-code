Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let done = createDone(promises.length, resolve)
        promises.forEach((promise, index) => {
            promise.then((value) => {
                done(index, value)
            })
        })
    })
}

let createDone = function (length, resolve) {
    let count = 0
    let values = []
    return function (i, value) {
        values[i] = value
        if (++count === length) {
            console.log(values)
            resolve(values)
        }
    }
}