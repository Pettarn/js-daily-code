// 什么时候resolve 每个promise resolve的data
// 在最后一个promise resolve的时候resolve
Promise._all = function (promises) {
    return new Promise((resolve, reject) => {
        const done = createDone(promises.length, resolve)
        for (let {promise, index} of promises) {
            promise.then((data) => {
                done(data, index)
            })
        }
    })
}

function createDone (len, resolve) {
    const result = []
    let count = 0
    return function (data, index) {
        result[index] = data
        if (++count === len) {
            resolve(result)
        }
    }
}

