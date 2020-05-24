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

arr.reduce((acc, cur) => {
    return acc.then(() => delay(cur))
}, Promise.resolve())