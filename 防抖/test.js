function debounce (func, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = setTimeout(func, delay)
        } else {
            timer = setTimeout(func, delay)
        }
    }
}

// 与事件处理器绑定的函数是debounce返回的函数，而不是debounce。
// 防抖的目的是让某个事件在一定的时间段内只触发一次。