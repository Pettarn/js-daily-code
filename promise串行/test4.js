function delay (time) {
    return new Promise((resolve, reject) => {
        console.log('await ' + time)
        setTimeout(() => {
            console.log('execute!')
            resolve()
        }, time * 1000)
    })
}

const arr = [3, 4, 5]
const length = arr.length

let count = 0

const dispatch = function (promise, arr) {
    if (count < length)
        return dispatch(promise.then(() => delay(arr[count++])), arr)
}

dispatch(Promise.resolve(), arr)