Promise.__all = function (promises) {
    return new Promise((resolve, reject) => {
        const done = createDone(promises.length, resolve)
        for (let {promise, index} of promises) {
            promise.then((value) => {
                done(index, value)
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

function createDone (len, resolve) {
    let count = 0
    const values = []
    return function (index, value) {
        values[index] = value
        if (++count === len) {
            resolve(values)
        }
    }
}