function throttle (func, timeout) {
    let flag = true
    return function () {
        let argList = [].slice.call(arguments)
        if (flag === true) {
            flag = false
            setTimeout(() => {
                flag = true
                func.apply(null, argList)
            }, timeout)
        }
    }
}

console.log = throttle(console.log, 1000)

setInterval(() => {
    console.log('bug')
})