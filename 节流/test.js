// 利用定时器

function throttle (func, timeout) {
    let flag = true
    return function () {
        let argList = [].slice.call(arguments)
        if (flag) {
            flag = false
            setTimeout(() => {
                flag = true
                func.apply(null, argList)
            }, timeout)
        } else {
            return
        }
    }
}