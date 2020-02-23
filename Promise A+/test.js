const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executer) {
    let that = this
    that.value = null
    that.reason = null
    that.status = PENDING
    that.fulfilledCallbacks = []
    that.rejectedCallbacks = []

    function resolve (value) {
        if (value instanceof Promise) {
            value.then(resolve, reject)
        }

        setTimeout(() => {
            if (that.status === FULFILLED) {
                try {
                    that.value = value
                    that.fulfilledCallbacks.forEach((cb) => cb(value))
                } catch (e) {
                    reject(e)
                }
            }
        })
    }

    function reject (e) {
        that.status = REJECTED
        that.reason = e
        throw new Error(e)
    }

    try {
        executer(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

function resolvePromise (promise2, x, resolve, reject) {
    if (promise2 === x) {
        throw new TypeError('互相引用，造成死循环')
    }

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let then = x.then
        try {
            then.call(x, (value) => {
                resolvePromise(x, value, resolve, reject)
            })
        } catch (e) {
            reject(e)
        }
    }  
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    let that = this

    if (that.status === PENDING)
    return promise2 = new Promise((resolve, reject) => {
        try {
            that.status = FULFILLED
            that.fulfilledCallbacks.push((value) => {
                let x = onFulfilled(value)
                resolvePromise(promise2, x, resolve, reject)
            })
        } catch (e) {
            that.rejectedCallbacks.push((e) => {
                onRejected(e)
            })
        }
    })
}


Promise.all = function (promiseList) {
    let resolveArgs = []
    let reason = null
    return new Promise((resolve, reject) => {
        for (let {i, index} of promiseList) {
            i.then((value) => {
                resolveArgs[index] = value
            }).catch((err) => {
                if (!reason) {
                    reason = err
                }
            })
        }
        setTimeout(() => {
            if (!reason) {
                resolve(resolveArgs)
            } else {
                reject(reason)
            }
        })
    })
}


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

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((resolve, reject))
        })
    })
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}