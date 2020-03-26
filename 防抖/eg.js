function debounce (func, timeout) {
    let timer = null
    return function () {
        let argList = [].slice.call(arguments)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(null, argList)
        }, timeout)
    }
}

