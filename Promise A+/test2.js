Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let done = createDone(promises.length, resolve)
        for (let {promise, index} of promises) {
            promise.then((value) => {
                done(index, value)
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

function createDone (length, resolve) {
    let count = 0
    let values = []
    return function (index, value) {
        values[index] = value
        if (++count === length) {
            resolve(values)
        }
    }
}