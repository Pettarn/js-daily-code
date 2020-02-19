const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executer) {
    let that = this
    that.state = PENDING
    that.value = null
    that.error = null
    that.fulfilledCallbacks = []
    that.rejectedCallback = []

    function resolve (val) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            that.state = FULFILLED
            that.fulfilledCallbacks.forEach((callback) => callback(val))
        })
    }
    
    try {
        executer(resolve)
    } catch (e) {
        reject(e)
    }
} 

Promise.prototype.then = function (onFulfilled, onRejected) {
    let that = this

    if (that.state === PENDING) {
        return new Promise((resolve, reject) => {
            try {
                that.fulfilledCallbacks.push((value) => {
                    onFulfilled(value)
                })
            } catch (e) {
                reject(e)
            }
        })
    }
}