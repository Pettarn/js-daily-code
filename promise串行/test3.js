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

let promise = Promise.resolve()
for (let item of arr) {
    promise = promise.then(() => delay(item))
}