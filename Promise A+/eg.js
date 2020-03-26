const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
const PENDING = 'pending'

function __Promise (executor) {
    let that = this
    that.value = null
    that.onFulfilledCallbacks = []
    that.onRejectedCallbacks = []
    that.status = PENDING
    function resolve (value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        } else {
            if (that.status === PENDING) {
                setTimeout(() => {
                    that.status = FULFILLED
                    that.value = value
                    that.onFulfilledCallbacks.forEach(callback => {
                        callback(that.value)
                    })
                })
            }
        }
    } 
    function reject (reason) {
        setTimeout(() => {
            if (that.status === PENDING) {
                that.status = REJECTED
                that.reason = reason
                that.onRejectedCallbacks.forEach(callback => {
                    callback(that.reason)
                })
            }
        })
    }

    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

__Promise.prototype.then = function (onFulfilled, onRejected) {
    let that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason

    if (that.status === PENDING) {
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push(onFulfilled)
            that.onRejectedCallbacks.push(onRejected)
        })
    }
}